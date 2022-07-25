/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  SupplyChain,
  SupplyChainInterface,
} from "../../../contracts/SupplyCoffe.sol/SupplyChain";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressPaisNaofazparte",
    type: "error",
  },
  {
    inputs: [],
    name: "NaoAutorizado",
    type: "error",
  },
  {
    inputs: [],
    name: "SafrajaPaga",
    type: "error",
  },
  {
    inputs: [],
    name: "SafrajaRegistrada",
    type: "error",
  },
  {
    inputs: [],
    name: "Safranaoconcluida",
    type: "error",
  },
  {
    inputs: [],
    name: "Brasil",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CofeToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
    ],
    name: "PagarRecompensa",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
    ],
    name: "ReceberFinal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Safras",
    outputs: [
      {
        internalType: "string",
        name: "descricao",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "vendedor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "pago",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "autorizados",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cadastrar",
        type: "address",
      },
    ],
    name: "autorizarEndereco",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buy10tokenCofe",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "enviarFundos",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCofetokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_prazofinal",
        type: "uint256",
      },
    ],
    name: "inserirPrazoFinal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maisUmaSemanaPrazo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "myCofetokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
    ],
    name: "pag1Tramite",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
    ],
    name: "pag2Tramite",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenCofe",
        type: "uint256",
      },
    ],
    name: "pag3TramiteFinal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enderecoSafra",
        type: "address",
      },
      {
        internalType: "string",
        name: "_descricao",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenCofe",
        type: "uint256",
      },
    ],
    name: "registrarSafra",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "desautorizar",
        type: "address",
      },
    ],
    name: "retirarEndereco",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "saldocontrato",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_Brasil",
        type: "address",
      },
    ],
    name: "setbrasil",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "somarRecompensas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeinit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSafras",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e0604052735b38da6a701c568545dcfcb03fcb875f56beddc460a05234801561002857600080fd5b50604051611ecb380380611ecb83398101604081905261004791610060565b6001600160a01b0316608052426000553360c052610090565b60006020828403121561007257600080fd5b81516001600160a01b038116811461008957600080fd5b9392505050565b60805160a05160c051611da361012860003960008181610e5c015281816111750152818161124e0152611901015260008181610a140152610f750152600081816101b70152818161058a0152818161085b0152818161092b01528181610c3801528181610d0e01528181610ef001528181611368015281816114f5015281816115e40152818161168601526118210152611da36000f3fe6080604052600436106101845760003560e01c806372790470116100d6578063d2d9ce771161007f578063ea85903611610059578063ea859036146103e8578063f2f913b414610408578063f5e07ea21461041b57600080fd5b8063d2d9ce77146103aa578063d5ac3a7f146103c0578063dfd55ed9146103d557600080fd5b8063b2086c87116100b0578063b2086c871461036d578063b495994114610375578063b73595d71461038a57600080fd5b806372790470146102ea5780638c14c670146102fd57806398f6260a1461033d57600080fd5b806333a183b3116101385780634f8f9eab116101125780634f8f9eab146102955780635daa4da71461029d5780636744b69a146102bd57600080fd5b806333a183b31461024d57806337ac1ff21461026d57806341b1d95a1461028257600080fd5b80631751f772116101695780631751f772146101f657806322ed859a1461021a5780632aaff4341461023a57600080fd5b80630826246f146101905780630deb86da146101a557600080fd5b3661018b57005b600080fd5b6101a361019e3660046119c4565b61043b565b005b3480156101b157600080fd5b506101d97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561020257600080fd5b5061020c60035481565b6040519081526020016101ed565b34801561022657600080fd5b506101a36102353660046119e6565b610696565b6101a36102483660046119c4565b6106cb565b34801561025957600080fd5b506101a36102683660046119c4565b610a09565b34801561027957600080fd5b506101a3610a8f565b6101a36102903660046119ff565b610acc565b6101a3610dd9565b3480156102a957600080fd5b506101a36102b83660046119c4565b610f6a565b3480156102c957600080fd5b5061020c6102d83660046119c4565b60066020526000908152604090205481565b6101a36102f8366004611a3f565b610fed565b34801561030957600080fd5b5061032d6103183660046119c4565b60056020526000908152604090205460ff1681565b60405190151581526020016101ed565b34801561034957600080fd5b5061035d6103583660046119c4565b6113e9565b6040516101ed9493929190611b11565b61020c6114a8565b34801561038157600080fd5b5061020c6114dd565b34801561039657600080fd5b506101a36103a53660046119c4565b61156e565b3480156103b657600080fd5b5061020c60005481565b3480156103cc57600080fd5b5061020c61166e565b6101a36103e33660046119c4565b6116bd565b3480156103f457600080fd5b506002546101d9906001600160a01b031681565b34801561041457600080fd5b504761020c565b34801561042757600080fd5b506101a36104363660046119c4565b6118f6565b6001600160a01b038116600090815260046020526040902060020154600160a01b900460ff161515600103610483576040516329960dd760e01b815260040160405180910390fd5b600060028054600160a01b900460ff16908111156104a3576104a3611b8d565b146104f55760405162461bcd60e51b815260206004820152601b60248201527f41207361667261206e616f206573746120656d207472616d697465000000000060448201526064015b60405180910390fd5b34670de0b6b3a76400001480610512575034671bc16d674ec80000145b61055e5760405162461bcd60e51b815260206004820152601c60248201527f736520746976657220436f666665546f6b656e20696e7369726120310000000060448201526064016104ec565b6040516370a0823160e01b8152336004820152671bc16d674ec8000090670de0b6b3a7640000906001907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fd9190611ba3565b111561064857604051309082156108fc029083906000818181858888f19350505050158015610630573d6000803e3d6000fd5b50336000908152600660205260409020805460010190555b600280546001919060ff60a01b1916600160a01b835b0217905550604051309083156108fc029084906000818181858888f19350505050158015610690573d6000803e3d6000fd5b50505050565b3360009081526005602052604090205460ff166106c6576040516339fad5bb60e21b815260040160405180910390fd5b600155565b6001600160a01b038181166000908152600460205260409020600201541633146107375760405162461bcd60e51b815260206004820152601e60248201527f766f6365206e616f2065206f2076656e6465646f72206461205361667261000060448201526064016104ec565b6001600160a01b038116600090815260046020526040902060020154600160a01b900460ff16151560010361077f576040516329960dd760e01b815260040160405180910390fd5b6002808054600160a01b900460ff169081111561079e5761079e611b8d565b146107ff5760405162461bcd60e51b815260206004820152602b60248201527f41207361667261206e616f2065737461206e6120756c74696d6120657461706160448201526a20646f207472616d69746560a81b60648201526084016104ec565b4760006103e861081183610258611bd2565b61081b9190611bf1565b905060006103e861082e846101f4611bd2565b6108389190611bf1565b6040516370a0823160e01b81523360048201529091506003906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156108a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c69190611ba3565b101580156108d657506001544211155b156109a257604051339083156108fc029084906000818181858888f19350505050158015610908573d6000803e3d6000fd5b506040516323b872dd60e01b8152336004820152306024820152600360448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561097c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a09190611c13565b505b6001600160a01b038416600090815260046020526040808220600201805460ff60a01b1916600160a01b17905551339183156108fc02918491818181858888f193505050501580156109f8573d6000803e3d6000fd5b505060038054600019019055505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801590610a4d57506002546001600160a01b03163314155b15610a6b5760405163070b1acf60e11b815260040160405180910390fd5b6001600160a01b03166000908152600560205260409020805460ff19166001179055565b3360009081526005602052604090205460ff16610abf576040516339fad5bb60e21b815260040160405180910390fd5b6001805462093a80019055565b6001600160a01b038216600090815260046020526040902060020154600160a01b900460ff161515600103610b14576040516329960dd760e01b815260040160405180910390fd5b6002808054600160a01b900460ff1690811115610b3357610b33611b8d565b14610b945760405162461bcd60e51b815260206004820152602b60248201527f41207361667261206e616f2065737461206e6120756c74696d6120657461706160448201526a20646f207472616d69746560a81b60648201526084016104ec565b34670de0b6b3a76400001480610bb1575034671bc16d674ec80000145b610c0c5760405162461bcd60e51b815260206004820152602660248201527f73652074697665722035206f75206d61697320436f666665546f6b656e20696e60448201526573697261203160d01b60648201526084016104ec565b6040516370a0823160e01b8152336004820152671bc16d674ec8000090670de0b6b3a7640000906005907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190611ba3565b101580610cb9575060018310155b15610da557604051309082156108fc029083906000818181858888f19350505050158015610ceb573d6000803e3d6000fd5b506040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610d5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d839190611c13565b50336000908152600660205260408120805491610d9f83611c35565b91905055505b604051309083156108fc029084906000818181858888f19350505050158015610dd2573d6000803e3d6000fd5b5050505050565b34670de0b6b3a764000014610e305760405162461bcd60e51b815260206004820152601c60248201527f76616c6f7220646520313020746f6b656e73203d20312045544845520000000060448201526064016104ec565b6000610e3d600234611bf1565b90506000610e4c600234611bf1565b6040519091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169083156108fc029084906000818181858888f19350505050158015610ea5573d6000803e3d6000fd5b50604051309082156108fc029083906000818181858888f19350505050158015610ed3573d6000803e3d6000fd5b5060405163a9059cbb60e01b8152336004820152600a60248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610f41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f659190611c13565b505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801590610fae57506002546001600160a01b03163314155b15610fcc5760405163070b1acf60e11b815260040160405180910390fd5b6001600160a01b03166000908152600560205260409020805460ff19169055565b3360009081526005602052604090205460ff1661101d576040516339fad5bb60e21b815260040160405180910390fd5b6001811115611096576040805162461bcd60e51b81526020600482015260248101919091527f646573636f6e746f20756e69746172696f2065206e616f2063756d756c61746960448201527f766f2e20496e7369726120756d20546f6b656e436f666520736520746976657260648201526084016104ec565b6001600160a01b03841660009081526004602052604090206001015482036110d157604051636758c21560e11b815260040160405180910390fd5b671bc16d674ec80000670de0b6b3a7640000600183106111c45734670de0b6b3a7640000146111685760405162461bcd60e51b815260206004820152603560248201527f6f2076616c6f7220646520726567697374726f2064652073616672612064657660448201527f652073657220696775616c20612031206574686572000000000000000000000060648201526084016104ec565b6040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169082156108fc029083906000818181858888f193505050501580156111be573d6000803e3d6000fd5b50611299565b34671bc16d674ec80000146112415760405162461bcd60e51b815260206004820152603560248201527f6f2076616c6f7220646520726567697374726f2064652073616672612064657660448201527f652073657220696775616c20612032206574686572000000000000000000000060648201526084016104ec565b6040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169083156108fc029084906000818181858888f19350505050158015611297573d6000803e3d6000fd5b505b60408051608081018252868152602080820187905233828401526000606083018190526001600160a01b038a168152600490915291909120815181906112df9082611cd6565b5060208201516001820155604080830151600292830180546060909501511515600160a01b027fffffffffffffffffffffff0000000000000000000000000000000000000000009095166001600160a01b039283161794909417909355815460ff60a01b1916909155516323b872dd60e01b8152336004820152306024820152604481018590527f0000000000000000000000000000000000000000000000000000000000000000909116906323b872dd906064016020604051808303816000875af11580156113b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d79190611c13565b50506003805460010190555050505050565b60046020526000908152604090208054819061140490611c4e565b80601f016020809104026020016040519081016040528092919081815260200182805461143090611c4e565b801561147d5780601f106114525761010080835404028352916020019161147d565b820191906000526020600020905b81548152906001019060200180831161146057829003601f168201915b5050505060018301546002909301549192916001600160a01b0381169150600160a01b900460ff1684565b60405160009030903480156108fc029184818181858888f193505050501580156114d6573d6000803e3d6000fd5b5034905090565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a08231906024015b602060405180830381865afa158015611545573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115699190611ba3565b905090565b6001600160a01b038116600090815260046020526040902060020154600160a01b900460ff166115b157604051633bfca1d960e01b815260040160405180910390fd5b3360009081526006602052604090205460021161166b5760405163a9059cbb60e01b8152336004820152600560248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015611635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116599190611c13565b50336000908152600660205260408120555b50565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401611528565b6001600160a01b038116600090815260046020526040902060020154600160a01b900460ff161515600103611705576040516329960dd760e01b815260040160405180910390fd5b600160028054600160a01b900460ff169081111561172557611725611b8d565b1461177d5760405162461bcd60e51b815260206004820152602260248201527f41207361667261206e616f2065737461206e61206d6574616465207472616d69604482015261746560f01b60648201526084016104ec565b34670de0b6b3a7640000148061179a575034671bc16d674ec80000145b6117f55760405162461bcd60e51b815260206004820152602660248201527f73652074697665722035206f75206d61697320436f666665546f6b656e20696e60448201526573697261203160d01b60648201526084016104ec565b6040516370a0823160e01b8152336004820152671bc16d674ec8000090670de0b6b3a7640000906005907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611870573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118949190611ba3565b106118de57604051309082156108fc029083906000818181858888f193505050501580156118c6573d6000803e3d6000fd5b50336000908152600660205260409020805460010190555b60028054819060ff60a01b1916600160a01b8261065e565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461196e5760405162461bcd60e51b815260206004820152601a60248201527f536f6d656e7465206f20446f6e6f20646f20636f6e747261746f00000000000060448201526064016104ec565b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b80356001600160a01b03811681146119bf57600080fd5b919050565b6000602082840312156119d657600080fd5b6119df826119a8565b9392505050565b6000602082840312156119f857600080fd5b5035919050565b60008060408385031215611a1257600080fd5b611a1b836119a8565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611a5557600080fd5b611a5e856119a8565b9350602085013567ffffffffffffffff80821115611a7b57600080fd5b818701915087601f830112611a8f57600080fd5b813581811115611aa157611aa1611a29565b604051601f8201601f19908116603f01168101908382118183101715611ac957611ac9611a29565b816040528281528a6020848701011115611ae257600080fd5b826020860160208301376000928101602001929092525095989597505050506040840135936060013592915050565b608081526000855180608084015260005b81811015611b3f57602081890181015160a0868401015201611b22565b81811115611b5157600060a083860101525b5060208301869052601f01601f1916820160a0019050611b7c60408301856001600160a01b03169052565b821515606083015295945050505050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611bb557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611bec57611bec611bbc565b500290565b600082611c0e57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611c2557600080fd5b815180151581146119df57600080fd5b600060018201611c4757611c47611bbc565b5060010190565b600181811c90821680611c6257607f821691505b602082108103611c8257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610f6557600081815260208120601f850160051c81016020861015611caf5750805b601f850160051c820191505b81811015611cce57828155600101611cbb565b505050505050565b815167ffffffffffffffff811115611cf057611cf0611a29565b611d0481611cfe8454611c4e565b84611c88565b602080601f831160018114611d395760008415611d215750858301515b600019600386901b1c1916600185901b178555611cce565b600085815260208120601f198616915b82811015611d6857888601518255948401946001909101908401611d49565b5085821015611d865787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea164736f6c634300080f000a";

type SupplyChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SupplyChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SupplyChain__factory extends ContractFactory {
  constructor(...args: SupplyChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SupplyChain> {
    return super.deploy(_token, overrides || {}) as Promise<SupplyChain>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): SupplyChain {
    return super.attach(address) as SupplyChain;
  }
  override connect(signer: Signer): SupplyChain__factory {
    return super.connect(signer) as SupplyChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SupplyChainInterface {
    return new utils.Interface(_abi) as SupplyChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SupplyChain {
    return new Contract(address, _abi, signerOrProvider) as SupplyChain;
  }
}
