const ethers = import(“ethers”);

async function main() {}

//http://127.0.0.1:7545 ganache rpc endpoint

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    ProcessingInstruction.exit(1);
  });
