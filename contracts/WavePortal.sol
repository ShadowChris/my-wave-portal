// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

/**
 * msg.sender: 获取合约调用者的地址
 * address(this): 获取当前合约的地址
 */
contract WavePortal {
    uint256 totalWaves;
    mapping (address => uint) countMap;
    address[] maxAddresses;
    int maxWave;


    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        countMap[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
    // 获取当前调用者的挥手次数
    function getMyWave() public view returns (uint) {
        console.log("Sender %s waved %d times", msg.sender, countMap[msg.sender]);
        return countMap[msg.sender];
    }
    // // 获取最大调用次数的地址数组
    // function getMaxWaveAddress() public view returns (address[] res) {
        
    // }

}