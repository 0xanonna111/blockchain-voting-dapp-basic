import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const contractAddress = "0xYourContractAddressHere";
const abi = [];

export async function getCandidates() {
  const provider = getProvider();
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return await contract.getCandidates();
}

export async function vote(index) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  await contract.vote(index);
}

export async function getResults() {
  const provider = getProvider();
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return await contract.getResults();
}
