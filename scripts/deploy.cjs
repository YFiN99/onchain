const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.deployContract("Counter");

  await Contract.waitForDeployment();

  console.log("Counter deployed at:", Contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
