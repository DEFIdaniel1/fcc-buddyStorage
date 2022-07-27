import { ethers } from "ethers" // const ethers = require("ethers")
import * as fs from "fs" // const fs = require("fs")
import "dotenv/config" // require("dotenv").config()

async function main() {
	//enacts Ganache instance
	const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!)
	//connects wallet w/ private key from ganache
	//   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

	//connects with ENCRYPTED Key
	const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8")
	let wallet = new ethers.Wallet.fromEncryptedJsonSync(
		encryptedJson,
		process.env.KEY_PASSWORD!
	)
	//need to connect the wallet to provider after decryption
	wallet = await wallet.connect(provider)

	//pull abi and binary from contract
	const abi = fs.readFileSync("./SimpleStorage_sol_BuddyStorage.abi", "utf8")
	const binary = fs.readFileSync(
		"./SimpleStorage_sol_BuddyStorage.bin",
		"utf8"
	)

	//connect contractFactory object to abi, binary, and wallet (wallet deploys the contract)
	const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
	console.log("Deploying, please wait...")

	//deploys the contract to the blockchain
	const contract = await contractFactory.deploy()

	//waits 1 block for transaction to finish
	await contract.deployTransaction.wait(1)

	//calls retreiveNumber function from the contract
	const currentNumber = await contract.retrieveNumber()
	//JS has problems decoding numbers from solidity. So need to use .toString() to ouput an integer
	console.log(`First Number is: ${currentNumber.toString()}`)

	//Adding a new number is a transaction that costs gas
	const addNewNumber = await contract.store("25")
	const addNewNumberReceipt = await addNewNumber.wait(1) //this will make sure the number changes before retrieving it!
	const updatedNumber = await contract.retrieveNumber()
	console.log(`New number is: ${updatedNumber}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
