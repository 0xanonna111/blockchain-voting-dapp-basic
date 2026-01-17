import { connectWallet } from "./web3.js";
import { getCandidates, vote, getResults } from "./contract.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const list = await getCandidates();
  document.getElementById("candidates").innerText = list.join(", ");
};

document.getElementById("voteBtn").onclick = async () => {
  await vote(0);
  const results = await getResults();
  document.getElementById("result").innerText = JSON.stringify(results);
};
