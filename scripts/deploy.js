const { ethers } = require("hardhat");

async function main() {
  const BicycleRental = await ethers.getContractFactory("BicycleRental");
  const bicycleRental = await BicycleRental.deploy();
  await bicycleRental.deployed();

  console.log(`BicycleRental deployed to: ${bicycleRental.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
