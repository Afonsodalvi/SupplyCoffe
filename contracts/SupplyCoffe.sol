// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";


//OBS. O CONTRATO NÃO DEVE SER REPLICADO - 
//Smart Contract feito em homenagem ao querido aluno Lucas Alves

//SupplyChain referente a compra e venda de Safras de café entre Japão e Brasil.
//O modelo a seguir é o registro da compra e venda de uma Safra na blockchain utilizando Smart Contract
//Quem pode fazer o registro são endereços autorizados pelo Brasil ou Japão. O endereço do Brasil será preenchido pelo dono do contrato
//No contrato é permitido a compra de 10 tokens de utilidade que tem como benefício descontos de 50% no cadastro da safra e tramites
//Caso o pagador do tramite tiver Coffetokens em sua conta durante o tramite, além de pagar somente 50% irá acumular registros que ao final te dará a possibilidade de ganhar mais 5 tokens
//Utilizamos uma estratégia do pagamento ser maior caso o vendedor consiga entregar a Safra até o prazo final estipulado e se tiver 3 ou mais tokens em sua carteira.
//Caso preenchido as duas delimitações ele recebe 50% total dos valores alocados no contrato, caso contrário receberá 40%.
//A recompensa em tokens para quem pagar dois ou mais tramites com tokens na conta é de 5 tokens na função de retirada da recompensa, após a entrega da Safra.
//Qualquer endereço externo pode comprar 10 utilitys tokens pelo valor de 1 ether e ter desconto de 50% no registro de uma nova compra e venda de Safra
//Com isso, há incentivos econômicos tanto para o vendedor, quanto para quem paga os tramites.


//siga os passos:

//Crie um Token ERC20 e implemente ele no constructor do Smart Contract abaixo.
//Faça o deploy do contrato SupplyCoffe e copie o endereço dele para colar no transfer e approve do contrato do Token
//Feito isso, transfira os valores necessários para o contrato SupplyCoffe e aprove de todas as contas que devem interagir a quantidade de tokens que achar necessária.


/// @author Omnes Blockchain, Copyright © , 2022, the MIT License
/// (https://github.com/OmnesBlockchainDev/SupplyCoffe.git)

///(https://github.com/Afonsodalvi)
contract SupplyChain{ //nomeamos o contrato 

error NaoAutorizado();
error AddressPaisNaofazparte();
error SafrajaRegistrada();
error SafrajaPaga();
error Safranaoconcluida();

//abaixo vamos declarar as variáveis necessárias e de registro do café e endereços, bem como os prazos

//tempo do inicio do contrato, para fins de auditoria.
uint public timeinit;

//token Coffe utility
IERC20 public immutable CofeToken;

//definidos o prazo final que será inserido pelo endereço autorizado pelo dono
uint prazofinal;

address immutable Japao = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

//endereço Brasil será definido em uma função
address public Brasil; 
//endereço do dono do contrato assim que deployar e responsável por receber as taxas em cada registro de nova safra
address payable immutable recebedorfee;


//inserindo o Token
constructor(address _token) {
    CofeToken = IERC20(_token);
    timeinit = block.timestamp;
    recebedorfee = payable(msg.sender);
   
}

//controle das etapas
enum Controle {tramite, meiotramite, finalizado}
Controle andamento;

//estrutura da Safra de Café
struct safraCoffe{
    string descricao;
    uint id;
    address payable vendedor;
    bool pago;
}
//contabilizando as safras
uint public totalSafras;

//a safra terá um endereço único e vamos contabilizar as safras registradas
mapping(address => safraCoffe) public Safras; //a safra terá um endereço único 
mapping (address => bool) public autorizados; //endereços autorizados a registrarem safras
mapping(address => uint256) public somarRecompensas;//somando recompensas dos endereços


function inserirPrazoFinal(uint _prazofinal) 
external naoAutorizado {
    //verifique sua data
    //insira a data conforme o valor de Unix timestamp
    //https://www.epochconverter.com/
    prazofinal = _prazofinal;
}

//aumentando em uma semana
function maisUmaSemanaPrazo() 
external naoAutorizado {
    unchecked {
    prazofinal = prazofinal +604800;
    }
}
//pegando o saldo de tokens do contrato
function getCofetokenBalance() public view returns(uint) {
    return CofeToken.balanceOf(address(this));
  }

//pegando o seu saldo de Tokens
function myCofetokenBalance()public view returns(uint) {
    return CofeToken.balanceOf(msg.sender);
  }
//possibilidade de enviar fundos para o contrato
function enviarFundos()public payable returns(uint){
    payable(address(this)).transfer(msg.value);
    return msg.value;
}
receive()payable external{
}

//nos contratos padrões tem a possibilidade de retirada dos fundos pelo dono, mas nesse caso não vou inserir
//Sendo que, quem retira o saldo é o vendedor conforme as delimitações de recompensa

//possibilidade de comprar 10 tokens
function buy10tokenCofe() payable external {
    require(msg.value == 1 ether, "valor de 10 tokens = 1 ETHER");
    //metade vai para o contrato e outra para a empresa criadora
    uint metadefeereceb = msg.value/2;
    uint metadecontract =msg.value/2;
    payable(recebedorfee).transfer(metadefeereceb);
    payable(address(this)).transfer(metadecontract);

    //o endereço que compra tem que autorizar o contrato a gastar a quantidade que ele comprou
    CofeToken.transfer(msg.sender, 10);

}

function setbrasil(address _Brasil) 
external onlyOwner{
Brasil =_Brasil;
}

modifier naoAutorizado(){
    if(!autorizados[msg.sender]) 
    revert NaoAutorizado();
    _;
}

modifier onlyOwner(){
    require(msg.sender == recebedorfee
    , "Somente o Dono do contrato");
    
    _;
}

modifier OnlyJapaoeBrasil(){
    if(msg.sender != Japao && msg.sender != Brasil) 
    revert AddressPaisNaofazparte();
    _;
}

function autorizarEndereco(address cadastrar)
external OnlyJapaoeBrasil{
autorizados[cadastrar] = true;
}

function retirarEndereco(address desautorizar)
external OnlyJapaoeBrasil{
autorizados[desautorizar] = false;
}

function saldocontrato()public view returns(uint){
    return address(this).balance;
}

//obs: se esquecer de aprovar o gasto no contrato do token retornará o seguinte erro:
//"ERC20: insufficient allowance".
//as taxas de registro irão diretamente para o dono do contrato
function registrarSafra(address enderecoSafra, string memory _descricao, 
uint _id, uint _tokenCofe)public payable naoAutorizado{
    require(_tokenCofe <= 1, "desconto unitario e nao cumulativo. Insira um TokenCofe se tiver");
    
    if(_id == Safras[enderecoSafra].id)
    revert SafrajaRegistrada();  

    //valor com o desconto do token ou não
    uint valorsemdesconto = 2 ether;
    uint valorcomdesconto = 1 ether; 

    if(_tokenCofe >= 1){
        require(msg.value == 1 ether, 
    "o valor de registro de safra deve ser igual a 1 ether");
        payable(recebedorfee).transfer(valorcomdesconto);
    } else {
    require(msg.value == 2 ether, 
    "o valor de registro de safra deve ser igual a 2 ether");
         payable(recebedorfee).transfer(valorsemdesconto);
    }
    //registro
    Safras[enderecoSafra] = safraCoffe(_descricao, _id, 
    payable(msg.sender), false);
    //transferindo o token

    unchecked{
    andamento = Controle.tramite;
    CofeToken.transferFrom(msg.sender, address(this), _tokenCofe);
    totalSafras++;
    }

}


function pag1Tramite( 
address enderecoSafra) public payable{

    if(Safras[enderecoSafra].pago == true) 
    revert SafrajaPaga();
    require(andamento == Controle.tramite, "A safra nao esta em tramite");
    //o valor tem que ser 1 ou 2 ethers
    require(msg.value == 1 ether || msg.value == 2 ether, "se tiver CoffeToken insira 1");
    //valor com o desconto do token ou não
    uint valorsemdesconto = 2 ether;
    uint valorcomdesconto = 1 ether; 
    //vai conferir se na sua conta tem o token ou não
    if(CofeToken.balanceOf(msg.sender) > 1){
        unchecked{
        payable(address(this)).transfer(valorcomdesconto);
        somarRecompensas[msg.sender]++;
        }
    }
    unchecked {
    andamento = Controle.meiotramite;
    payable(address(this)).transfer(valorsemdesconto);
    }
    

}


function pag2Tramite( 
address enderecoSafra) public payable{
    if(Safras[enderecoSafra].pago == true) 
    revert SafrajaPaga();

   require(andamento == Controle.meiotramite 
   , "A safra nao esta na metade tramite");

    //o valor tem que ser 1 ou 2 ethers
    require(msg.value == 1 ether || msg.value == 2 ether, "se tiver 5 ou mais CoffeToken insira 1");
    //valor com o desconto do token ou não
    uint valorsemdesconto = 2 ether;
    uint valorcomdesconto = 1 ether; 
    //vai conferir se na sua conta tem o token ou não
    if(CofeToken.balanceOf(msg.sender) >= 5){
        unchecked{
        payable(address(this)).transfer(valorcomdesconto);
        somarRecompensas[msg.sender]++;
        }
    }
    andamento = Controle.finalizado;
    unchecked {
    payable(address(this)).transfer(valorsemdesconto);
    }
     
    
}


function pag3TramiteFinal( 
address enderecoSafra, uint _tokenCofe) public payable{
    if(Safras[enderecoSafra].pago == true) 
    revert SafrajaPaga();

   require(andamento == Controle.finalizado
   , "A safra nao esta na ultima etapa do tramite");

   //o valor tem que ser 1 ou 2 ethers
    require(msg.value == 1 ether || msg.value == 2 ether
    , "se tiver 5 ou mais CoffeToken insira 1");
    //valor com o desconto do token ou não
    uint valorsemdesconto = 2 ether;
    uint valorcomdesconto = 1 ether; 
    //vai conferir se na sua conta tem o token ou não 5 ou mais tokens ou se vc inseriu mais de 1
    //pq isso? se o endereço estiver com 4 tokens e já inseriu um deles na anterior e acomulou a possibilidade de recompens
    //aqui vai forca-lo a inserir o token para pagar menos e ainda retirar ao final mais 5 tokens de recompensa
    //tem que ser um ou outro se não for nenhum dos dois vai pagar 2 ether
    if(CofeToken.balanceOf(msg.sender) >= 5 || _tokenCofe >=1){
        payable(address(this)).transfer(valorcomdesconto);
        CofeToken.transferFrom(msg.sender, address(this), _tokenCofe);
        somarRecompensas[msg.sender]++;
    }
    payable(address(this)).transfer(valorsemdesconto);
}

function PagarRecompensa(address enderecoSafra)public {

//safra precisa estar concluida e o vendedor deve ter pego seu pagamento, 
//para que não haja um valor final maior que o justo
if(!Safras[enderecoSafra].pago) 
revert Safranaoconcluida();
unchecked{
//só vai receber a recompensa de 5 se fez os tramites com o token na conta
//e pagou mais de duas com tokens na conta
if(somarRecompensas[msg.sender] >= 2){
CofeToken.transfer(msg.sender,5);
somarRecompensas[msg.sender] = 0;
    }
}
}

function ReceberFinal(address enderecoSafra)public payable{
require(Safras[enderecoSafra].vendedor == msg.sender
, "voce nao e o vendedor da Safra");

if(Safras[enderecoSafra].pago == true) 
    revert SafrajaPaga();
require(andamento == Controle.finalizado
, "A safra nao esta na ultima etapa do tramite");


    //uint todososCoffeTokens = CofeToken.balanceOf(msg.sender);
    uint totalnocontrato = address(this).balance;
    uint recebercomtokens = (totalnocontrato * 600)/1000; //40% por cento
    uint recebersemtokens = (totalnocontrato * 500)/1000; //50% por cento
    //se o vendedor tiver 3 ou mais tokens na carteira e entregou no prazo recebe uma quantida bem generosa
    if(CofeToken.balanceOf(msg.sender) >= 3 && block.timestamp <= prazofinal){
        payable(msg.sender).transfer(recebercomtokens);
        CofeToken.transferFrom(msg.sender, address(this), 3);
    }
    Safras[enderecoSafra].pago = true;
    unchecked{
    payable(msg.sender).transfer(recebersemtokens);
    totalSafras--;
    }
    

}

}