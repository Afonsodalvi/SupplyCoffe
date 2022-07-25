// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;
pragma abicoder v2;

import { ERC20 } from "./solmate/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Afonso", "AFD", 18) {
        _mint(msg.sender, 1000000 * 1000000000000000000);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function burnFrom(address account, uint256 amount) public {
        uint256 currentAllowance = allowance[account][msg.sender];
        require(currentAllowance >= amount, "ERC20: burn amount exceeds allowance");
        unchecked {
            allowance[account][msg.sender] -= amount;
        }
        _burn(account, amount);
    }
}
