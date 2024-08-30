import { ethers } from 'ethers';
import votingABI from './abi/Voting.json'; 

const contractAddress = '0xaf1bc8ab0210848b38dfd602eef7e9634a5cbc0d'; 

// Function to get the smart contract instance
export const getContract = () => {
  // Create a provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Get the signer from the provider
  const signer = provider.getSigner();
  // Create and return a contract instance
  return new ethers.Contract(contractAddress, votingABI, signer);
};

// Function to submit attendance
export const submitAttendance = async (students) => {
  try {
    const contract = getContract();
    const studentsChecked = students.filter(student => student.isChecked).map(student => student.name);
    // Replace `recordAttendance` with the correct method name from your contract
    const tx = await contract.recordAttendance(studentsChecked);
    await tx.wait(); // Wait for the transaction to be mined
    return true;
  } catch (error) {
    console.error('Error submitting attendance:', error);
    return false;
  }
};
