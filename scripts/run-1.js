const main = async () => {
    // 这将实际编译我们的合约并在 artifacts 目录下生成我们需要使用我们的合约的必要文件。运行后去检查一下 :) 。
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    /**
     * 这很有趣 :) 。这里发生的事情是，Hardhat 将为我们创建一个本地以太坊网络，但只是为了这个合约。
     * 然后，在脚本完成后，它会破坏该本地网络。因此，每次运行合约时，它都会是一个全新的区块链。重点是什么？
     * 这有点像每次都刷新您的本地服务器，所以您总是从一个干净的石板开始，这样可以轻松调试错误。
     */
    const waveContract = await waveContractFactory.deploy();
    // 我们将等到我们的合约正式部署到我们的本地区块链！我们的 constructor 在我们实际部署时运行。
    await waveContract.deployed();
    /**
     * 最后，一旦它被部署，waveContract.address 基本上会给我们部署合约的地址。
     * 这个地址是我们在区块链上实际找到我们的合约的方式。实际区块链上有数百万个合约。
     * 所以，这个地址让我们可以轻松访问我们有兴趣使用的合同！
     * 一旦我们部署到真正的以太坊网络，这将在稍后变得更加重要。
     */
    console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();