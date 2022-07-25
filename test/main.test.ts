import { mine } from "@nomicfoundation/hardhat-network-helpers";
import { increase } from "@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time";
import {
  days,
  minutes,
} from "@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time/duration";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import {
  BigNumber,
  Contract,
  ContractFunction,
  ContractReceipt,
  ContractTransaction,
  Wallet,
} from "ethers";
import { ethers, network } from "hardhat";

// import { Afonso__factory } from "../src/types";
// import { tokenSol } from "../src/types/contracts";

describe("Supply Coffe - Cofetoken & SupplyChain and sell Coffe", () => {
  type WalletWithAddress = Wallet & SignerWithAddress;

  let owner: WalletWithAddress;

  let user1: WalletWithAddress;

  let user2: WalletWithAddress;

  let brazilian: WalletWithAddress;

  let vendedor: WalletWithAddress;

  let japao: WalletWithAddress;

  let res: any;

  let supplytoken: Contract;
  let supplychain: Contract;

  const ethAmount: BigNumber = ethers.utils.parseEther("10000");
  // const newRes = ethers.utils.formatEther(res);
  // const formatRes = Number.parseFloat(newRes).toFixed(2).toString();

  beforeEach(async () => {
    const tokenA = await ethers.getContractFactory("Token");
    const supplychai = await ethers.getContractFactory("SupplyChain");

    [owner, user1, user2, brazilian, vendedor, japao] = await (ethers as any).getSigners();

    supplytoken = await tokenA.deploy();
    await supplytoken.deployed();

    const token = supplytoken.address;

    supplychain = await supplychai.deploy(token);
    await supplychain.deployed();
  });

  describe("Init", async () => {
    it("should initialize", async () => {
      expect(supplychain).to.be.ok;
    });

    it("accounts have been funded", async () => {
      // can't be eq to ethAmount due to marketplace contract deployment cost
      res = await ethers.provider.getBalance(owner.address);

      expect(res.toString()).to.have.lengthOf(22);
      // console.log(res); // lengthOf = 22
      // console.log(ethAmount); // lengthOf = 23

      expect(await ethers.provider.getBalance(user1.address)).to.eq(ethAmount);
      expect(await ethers.provider.getBalance(brazilian.address)).to.eq(ethAmount);
      expect(await ethers.provider.getBalance(vendedor.address)).to.eq(ethAmount);
    });

    describe("Init Supply", async () => {


    });
  });
});
