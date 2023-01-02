require("@nomicfoundation/hardhat-toolbox");

// 这是一个hardhat的项目示例。可以到下面网站去学习创建你自己的项目。
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// 您需要导出一个对象来设置您的配置
// 到 https://hardhat.org/config/ 学习更多内容

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
};