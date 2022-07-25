# <h1 align="center"> Hardhat x Foundry Template </h1>

**Template repository for getting started quickly with Hardhat and Foundry in one project**

![Github Actions]()

### Getting Started

- Use Foundry:

```bash
forge install
forge test
```

- Use Hardhat:

```bash
yarn
yarn test
```
### Explicação

SupplyChain referente a compra e venda de Safras de café entre Japão e Brasil.
O modelo a seguir é o registro da compra e venda de uma Safra na blockchain utilizando Smart Contract
Quem pode fazer o registro são endereços autorizados pelo Brasil ou Japão. O endereço do Brasil será preenchido pelo dono do contrato
No contrato é permitido a compra de 10 tokens de utilidade que tem como benefício descontos de 50% no cadastro da safra e tramites
Caso o pagador do tramite tiver Coffetokens em sua conta durante o tramite, além de pagar somente 50% irá acumular registros que ao final te dará a possibilidade de ganhar mais 5 tokens
Utilizamos uma estratégia do pagamento ser maior caso o vendedor consiga entregar a Safra até o prazo final estipulado e se tiver 3 ou mais tokens em sua carteira.
Caso preenchido as duas delimitações ele recebe 50% total dos valores alocados no contrato, caso contrário receberá 40%.
A recompensa em tokens para quem pagar dois ou mais tramites com tokens na conta é de 5 tokens na função de retirada da recompensa, após a entrega da Safra.
Qualquer endereço externo pode comprar 10 utilitys tokens pelo valor de 1 ether e ter desconto de 50% no registro de uma nova compra e venda de Safra
Com isso, há incentivos econômicos tanto para o vendedor, quanto para quem paga os tramites.

- funções:

- Registro de Safra de um endereço autorizado e todas as informações referentes. Se o executor tiver tokens na conta ele pode usar no máximo um para conseguir o desconto. Os valores do registro vão diretamente para a conta do dono do contrato (recebedorfee).

```bash
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
```

- Pagamento do primeiro trâmite, verifica se o endereço executor tem mais de um token na conta e caso tenha paga valor com o desconto, nesse caso o valor em ether vai para o contrato diretamente. Soma que o endereço pagou com tokens na conta e aumentando a possibilidade de recompensa no final.

```bash
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
```

- Pagamento segundo trâmite, verifica se tem 5 ou mais tokens na conta. E muda novamente de estado do tramite e soma a possibilidade de recompensa. 

```bash
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
    unchecked {
    andamento = Controle.finalizado;
    payable(address(this)).transfer(valorsemdesconto);
    }
}

```
### Recompensas e recebimento do pagamento

- Pontos finais essenciais: 

- Função de receber ao final do trâmite deve ser executada pelo vendedor da Safra. Caso o endereço tenha 3 ou mais tokens e o prazo final foi cumprido ele receberá 50% do valor total que está no contrato e enviará os tokens para o contrato.

```bash
function ReceberFinal(address enderecoSafra)public payable{
require(Safras[enderecoSafra].vendedor == msg.sender
, "voce nao e o vendedor da Safra");
if(Safras[enderecoSafra].pago == true) 
    revert SafrajaPaga();

    //uint todososCoffeTokens = CofeToken.balanceOf(msg.sender);
    uint totalnocontrato = address(this).balance;
    uint recebercomtokens = (totalnocontrato * 600)/1000; //40% por cento
    uint recebersemtokens = (totalnocontrato * 500)/1000; //50% por cento
    //se o vendedor tiver 3 ou mais tokens na carteira e entregou no prazo recebe uma quantida bem generosa
    if(CofeToken.balanceOf(msg.sender) >= 3 && block.timestamp <= prazofinal){
        payable(msg.sender).transfer(recebercomtokens);
        CofeToken.transferFrom(msg.sender, address(this), 3);
    }
    unchecked{
    Safras[enderecoSafra].pago = true;
    payable(msg.sender).transfer(recebersemtokens);
    totalSafras--;
    }
}
```
- Função de recompensa, o endereço insere o endereço da Safra e recebe 5 Tokens caso tenha executado 2 ou mais trâmites com tokens na conta.

```bash

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

```
### Features

- Write / run tests with either Hardhat or Foundry:

```bash
forge test
# or
yarn test
```

- Use Truffle Dashboard:

```bash
truffle dashboard
```

- Deploy your smart-contract using testnet Truffle Dashboard:

```bash
yarn deploy --network truffle
```

- Use compile watch or test watch:

```bash
yarn hardhat compile:watch
yarn hardhat test:watch
```

- Use Hardhat's task framework

```bash
npx hardhat example
```

- Use Prettier

```bash
yarn prettier
```

- Install libraries with Foundry which work with Hardhat.

```bash
forge install rari-capital/solmate # Already in this repo, just an example
```

- Configured gas cost with hardhat-gas-reporter

```bash
yarn add hardhat-gas-reporter # Already in this repo, just an example
```

### Notes

Fiz um conjunto de implementações para ficar mais fácil o uso de diversos frameworks necessários para iniciar qualquer projeto.

Whenever you install new libraries using Foundry, make sure to update your `remappings.txt` file by running `forge remappings > remappings.txt`. This is required because we use `hardhat-preprocessor` and the `remappings.txt` file to allow Hardhat to resolve libraries you install with Foundry.
