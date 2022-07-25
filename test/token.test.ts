import { expect } from "chai";
import {
  BigNumber,
  Contract,
  ContractFunction,
  ContractReceipt,
  ContractTransaction,
  Wallet,
} from "ethers";
import { ethers } from "hardhat";

describe("Afonso Token", function () {
  it("Should return name Token", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("Afonso");
  });
});
