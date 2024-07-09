# BicycleRental Smart Contract

The BicycleRental smart contract facilitates a decentralized bicycle rental service. Users can rent bicycles by sending ETH and can return the bicycles to get a partial refund. The contract owner can manage the contract and the associated funds.

## Description

The BicycleRental smart contract allows users to rent and return bicycles by sending and receiving ETH. The contract includes functionalities to manage rental status and handle ETH transactions securely. The owner of the contract can manage the contract activities.

## Getting Started

### Installing

1. Clone the project repository from GitHub.
2. Navigate to the project directory.
3. Run the following command to install necessary dependencies:
    ```
    npm i
    ```

### Sample Smart Contract Code

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BicycleRental {
    address payable public owner;
    mapping(address => bool) public rentals;

    event BicycleRented(address indexed user);
    event RentalReturned(address indexed user);

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor() payable {
        owner = payable(msg.sender);
    }

    function rentBicycle(uint256 amount) public payable {
        require(amount == 1 ether, "You must send exactly 1 ETH to rent a bicycle");
        require(!rentals[msg.sender], "Bicycle already rented");

        rentals[msg.sender] = true;
        emit BicycleRented(msg.sender);
    }

    function returnBicycle() public {
        require(rentals[msg.sender], "No bicycle to return");
        rentals[msg.sender] = false;
        payable(msg.sender).transfer(0.9 ether);
        emit RentalReturned(msg.sender);
    }

    function getRentalStatus(address user) public view returns (bool) {
        return rentals[user];
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    // Fallback function to receive ETH
    receive() external payable {}

    fallback() external payable {}
}
```

## Executing Program

Open three terminals in your VS Code and navigate to the project directory in each terminal.

1. In the first terminal, start the local blockchain node:
    ```
    npx hardhat node
    ```

2. In the second terminal, deploy the contract to the local blockchain network:
    ```
    npx hardhat run --network localhost scripts/deploy.js
    ```

3. In the third terminal, launch the front-end of the project:
    ```
    npm run dev
    ```

The project should now be running on your localhost, typically at [http://localhost:3000/](http://localhost:3000/).

## Working

We will document the deployed contract address and place it in the required places of our project files. We will subsequently develop the project's frontend. This frontend will establish a connection with the MetaMask wallet, directing the user to the wallet page for transaction approvals. Users will be able to rent and return bicycles, which will redirect them to MetaMask to authorize transactions.

## Help

If you encounter any issues or need further assistance, refer to the help command within the project:
```sh
npx hardhat help
```

## Authors

Contributors names and contact info:
- Aditi Rajput [LinkedIn](https://www.linkedin.com/in/aditi-rajput-b9360720b/)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
