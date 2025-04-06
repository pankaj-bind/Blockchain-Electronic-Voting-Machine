# Voting App

A decentralized voting application built using React, Solidity, Hardhat, and Node.js. The app allows users to vote for candidates securely on the blockchain, with a one-vote-per-account restriction and a 60-second voting time limit. The frontend is styled to resemble a real-life Electronic Voting Machine (EVM) on the homepage, with additional pages for viewing results, about information, and contact details. The app supports light and dark mode themes with an SVG-based theme toggle.

## Features
- **Decentralized Voting**: Votes are recorded on a local Hardhat blockchain.
- **One-Vote-Per-Account**: Each wallet address can vote only once.
- **Time-Limited Voting**: Voting is restricted to a 60-second window.
- **EVM-Style Interface**: The homepage mimics the look of a real-life Electronic Voting Machine.
- **Theme Toggle**: Switch between light and dark modes using an SVG-based toggle.
- **Navigation**: Includes Home, Result, About, and Contact pages.
- **Backend Integration**: Uses MongoDB and Express to store and fetch candidate data.

## Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (v16 or later): [Download](https://nodejs.org/)
- **MongoDB**: [Download](https://www.mongodb.com/try/download/community) and install MongoDB Community Edition.
- **MetaMask**: Install the MetaMask browser extension ([Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)).
- **Git**: [Download](https://git-scm.com/downloads) (optional, for cloning the project).

## Setup Instructions

### 1. Clone the Repository (if applicable)
If you have the project in a Git repository, clone it:
```bash
git clone <repository-url>
cd VotingApp
```

## Set Up MongoDB
1) Install MongoDB if not already installed.
2) Start the MongoDB server
```
mongod
```

## Set Up the Blockchain (Hardhat)
1. Navigate to the blockchain directory:
```
cd VotingApp/blockchain
```

2. Install Hardhat dependencies:
```
npm install
```

3. Start the Hardhat local network:
```
npx hardhat node
```
- This starts a local Ethereum network on http://127.0.0.1:8545 with 20 test accounts (each with 10,000 ETH). Note the private key of a test account (e.g., the first one) for MetaMask.
- Keep this terminal running.

4. In a new terminal, deploy the smart contract:
```
cd VotingApp/blockchain
npx hardhat run scripts/deploy.js --network localhost
```

- Note the deployed contract address (e.g., Voting deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3).

5. Update the contract address in the frontend:
- Open client/src/components/Home.js and set the CONTRACT_ADDRESS to the deployed address.

6. Copy the contract ABI to the frontend:
- Open blockchain/artifacts/contracts/Voting.sol/Voting.json.
- Copy the abi array and paste it into client/src/VotingABI.json, replacing its contents.
## Set Up MetaMask
1. Open MetaMask in your browser.
2. Add the Hardhat local network:
Network Name: Hardhat
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
3. Import a test account:
From the Hardhat node output, copy the private key of a test account.
In MetaMask, click "Import Account" and paste the private key.
This account will have 10,000 ETH for testing.

## Set Up the Backend (Node.js/Express)
1. Navigate to the server directory:
```
cd VotingApp/server
```
2. Install backend dependencies:
```npm install```
3. Start the backend server:
```node server.js```
The server should run on http://localhost:5000.
Ensure MongoDB is running; otherwise, the server will fail to connect.
Keep this terminal running.

## Set Up the Frontend (React)
1. Navigate to the client directory:
```cd VotingApp/client```
2. Install frontend dependencies:
```npm install```
3. Start the React app:
```npm start```
The app should open in your browser at http://localhost:3000.
If it doesn’t open, manually navigate to http://localhost:3000.

## Running the Project
1. Start MongoDB:
```
mongod
```
2. Start the Hardhat node:
```
cd VotingApp/blockchain
npx hardhat node
```
3. Deploy the smart contract (if needed):
```
cd VotingApp/blockchain
npx hardhat run scripts/deploy.js --network localhost
```
4. Start the backend server:
```
cd VotingApp/server
node server.js
```
5. Start the frontend:
```
cd VotingApp/client
npm start
```

6. Open http://localhost:3000 in your browser.
7. Connect MetaMask to the Hardhat network and use a test account to vote.

## Usage
- Home Page: Styled like an Electronic Voting Machine (EVM). Connect your wallet, then click the "VOTE" button next to a candidate. You have 60 seconds to vote, and each wallet can vote only once. A beep sound plays upon successful voting, and status lamps indicate "Ready" (green) or "Busy" (red).
- Result Page: View the vote counts for each candidate, sorted by vote count (highest to lowest), with alphabetical sorting for equal votes.
- About Page: Learn more about the app, its purpose, features, and technology stack (314 words).
- Contact Page: Find contact information (email, phone, social media, GitHub) and submit feedback (314 words).
- Theme Toggle: Use the sun/moon icon in the header to switch between light and dark modes (with a tooltip and animation).