pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

    event Deposit(address sender, uint256 amount);
    event Withdraw(address sender, uint256 amount);

    mapping(address => uint256) public balance;

    constructor() public {}

    receive() external payable { deposit(); }

    function balanceOfPool() public returns(uint256) {
      return address(this).balance;
    }

    function deposit() public payable {
      balance[msg.sender] += msg.value;
      emit Deposit(msg.sender, msg.value);
    }

    function withdraw() public {
      require(balance[msg.sender] > 0, "You have no funds in the pool.");

      uint256 amount = balance[msg.sender];
      balance[msg.sender] = 0;
      msg.sender.transfer(amount);
      emit Withdraw(msg.sender, amount);
    }

}
