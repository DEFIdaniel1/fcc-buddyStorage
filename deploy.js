const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "f7c9c28a053fbb967e3c30993c972bf9ba39cfc8501bc4cccf8cd5053efd3b0e",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_BuddyStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_BuddyStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  const deploymentReceipt = await contract.deployTransaction.wait(1);
  //to send TRANSACTION ONLY
  //   const nonce = await wallet.getTransactionCount();
  //   const tx = {
  //     nonce: nonce,
  //     gasPrice: 20000000000,
  //     gasLimit: 1000000,
  //     to: null,
  //     value: 0,
  //     data: "0x608060405260405180604001604052806103dd81526020016040518060400160405280600a81526020017f426162792042696c6c7900000000000000000000000000000000000000000000815250815250600260008201518160000155602082015181600101908162000073919062000304565b5050503480156200008357600080fd5b50620003eb565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200010c57607f821691505b602082108103620001225762000121620000c4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200018c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200014d565b6200019886836200014d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001e5620001df620001d984620001b0565b620001ba565b620001b0565b9050919050565b6000819050919050565b6200020183620001c4565b620002196200021082620001ec565b8484546200015a565b825550505050565b600090565b6200023062000221565b6200023d818484620001f6565b505050565b5b8181101562000265576200025960008262000226565b60018101905062000243565b5050565b601f821115620002b4576200027e8162000128565b62000289846200013d565b8101602085101562000299578190505b620002b1620002a8856200013d565b83018262000242565b50505b505050565b600082821c905092915050565b6000620002d960001984600802620002b9565b1980831691505092915050565b6000620002f48383620002c6565b9150826002028217905092915050565b6200030f826200008a565b67ffffffffffffffff8111156200032b576200032a62000095565b5b620003378254620000f3565b6200034482828562000269565b600060209050601f8311600181146200037c576000841562000367578287015190505b620003738582620002e6565b865550620003e3565b601f1984166200038c8662000128565b60005b82811015620003b6578489015182556001820191506020850194506020810190506200038f565b86831015620003d65784890151620003d2601f891682620002c6565b8355505b6001600288020188555050505b505050505050565b610c2780620003fb6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806377ec2b551161005b57806377ec2b55146100ff5780638381f58a1461011e5780639e7a13ad1461013c578063a009491b1461016d57610088565b80632fae4ffd1461008d5780634fa73a87146100bd5780636057361d146100c75780636f760f41146100e3575b600080fd5b6100a760048036038101906100a2919061063c565b61018b565b6040516100b4919061069e565b60405180910390f35b6100c56101b9565b005b6100e160048036038101906100dc91906106e5565b6102db565b005b6100fd60048036038101906100f89190610712565b6102ee565b005b61010761037d565b6040516101159291906107f6565b60405180910390f35b610126610417565b604051610133919061069e565b60405180910390f35b610156600480360381019061015191906106e5565b61041d565b6040516101649291906107f6565b60405180910390f35b6101756104d9565b604051610182919061069e565b60405180910390f35b6001818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600460405180604001604052806002600001548152602001600260010180546101e190610855565b80601f016020809104026020016040519081016040528092919081815260200182805461020d90610855565b801561025a5780601f1061022f5761010080835404028352916020019161025a565b820191906000526020600020905b81548152906001019060200180831161023d57829003601f168201915b505050505081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190816102aa9190610a32565b505050600260000154600160026001016040516102c79190610b92565b908152602001604051809103902081905550565b806000819055506102ea6104d9565b5050565b6000604051806040016040528083815260200184815250905060048190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190816103529190610a32565b505050816001846040516103669190610bda565b908152602001604051809103902081905550505050565b600280600001549080600101805461039490610855565b80601f01602080910402602001604051908101604052809291908181526020018280546103c090610855565b801561040d5780601f106103e25761010080835404028352916020019161040d565b820191906000526020600020905b8154815290600101906020018083116103f057829003601f168201915b5050505050905082565b60005481565b6004818154811061042d57600080fd5b906000526020600020906002020160009150905080600001549080600101805461045690610855565b80601f016020809104026020016040519081016040528092919081815260200182805461048290610855565b80156104cf5780601f106104a4576101008083540402835291602001916104cf565b820191906000526020600020905b8154815290600101906020018083116104b257829003601f168201915b5050505050905082565b60008054905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61054982610500565b810181811067ffffffffffffffff8211171561056857610567610511565b5b80604052505050565b600061057b6104e2565b90506105878282610540565b919050565b600067ffffffffffffffff8211156105a7576105a6610511565b5b6105b082610500565b9050602081019050919050565b82818337600083830152505050565b60006105df6105da8461058c565b610571565b9050828152602081018484840111156105fb576105fa6104fb565b5b6106068482856105bd565b509392505050565b600082601f830112610623576106226104f6565b5b81356106338482602086016105cc565b91505092915050565b600060208284031215610652576106516104ec565b5b600082013567ffffffffffffffff8111156106705761066f6104f1565b5b61067c8482850161060e565b91505092915050565b6000819050919050565b61069881610685565b82525050565b60006020820190506106b3600083018461068f565b92915050565b6106c281610685565b81146106cd57600080fd5b50565b6000813590506106df816106b9565b92915050565b6000602082840312156106fb576106fa6104ec565b5b6000610709848285016106d0565b91505092915050565b60008060408385031215610729576107286104ec565b5b600083013567ffffffffffffffff811115610747576107466104f1565b5b6107538582860161060e565b9250506020610764858286016106d0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107a857808201518184015260208101905061078d565b838111156107b7576000848401525b50505050565b60006107c88261076e565b6107d28185610779565b93506107e281856020860161078a565b6107eb81610500565b840191505092915050565b600060408201905061080b600083018561068f565b818103602083015261081d81846107bd565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061086d57607f821691505b6020821081036108805761087f610826565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026108e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826108ab565b6108f286836108ab565b95508019841693508086168417925050509392505050565b6000819050919050565b600061092f61092a61092584610685565b61090a565b610685565b9050919050565b6000819050919050565b61094983610914565b61095d61095582610936565b8484546108b8565b825550505050565b600090565b610972610965565b61097d818484610940565b505050565b5b818110156109a15761099660008261096a565b600181019050610983565b5050565b601f8211156109e6576109b781610886565b6109c08461089b565b810160208510156109cf578190505b6109e36109db8561089b565b830182610982565b50505b505050565b600082821c905092915050565b6000610a09600019846008026109eb565b1980831691505092915050565b6000610a2283836109f8565b9150826002028217905092915050565b610a3b8261076e565b67ffffffffffffffff811115610a5457610a53610511565b5b610a5e8254610855565b610a698282856109a5565b600060209050601f831160018114610a9c5760008415610a8a578287015190505b610a948582610a16565b865550610afc565b601f198416610aaa86610886565b60005b82811015610ad257848901518255600182019150602085019450602081019050610aad565b86831015610aef5784890151610aeb601f8916826109f8565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60008154610b1c81610855565b610b268186610b04565b94506001821660008114610b415760018114610b5657610b89565b60ff1983168652811515820286019350610b89565b610b5f85610886565b60005b83811015610b8157815481890152600182019150602081019050610b62565b838801955050505b50505092915050565b6000610b9e8284610b0f565b915081905092915050565b6000610bb48261076e565b610bbe8185610b04565b9350610bce81856020860161078a565b80840191505092915050565b6000610be68284610ba9565b91508190509291505056fea264697066735822122055c49eafd936f4168564f75564358d006ca4752eb2bc712fb966ea0c6bd7281064736f6c634300080f0033",
  //     chainId: 1337,
  //   };
  //   const sentTxResponse = await wallet.sendTransaction(tx);
  //   await sentTxResponse.wait(1);
  //   console.log(sentTxResponse);
}

main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    ProcessingInstruction.exit(1);
  });
