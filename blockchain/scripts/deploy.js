const hre = require("hardhat");

async function main() {
    const Voting = await hre.ethers.getContractFactory("Voting");
    const candidateNames = ["Mark", "Mike", "Henry", "Rock"];
    const voting = await Voting.deploy(candidateNames);

    await voting.waitForDeployment();

    console.log("Voting deployed to:", voting.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});