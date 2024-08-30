const hre = require("hardhat");

async function main() {
  const Attendance = await hre.ethers.deployContract("Attendance");
  await Attendance.waitForDeployment();
  console.log(`Attendance contract deployed to ${Attendance.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
