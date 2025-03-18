# Initia Wallet Generator

A simple TypeScript tool for generating Initia blockchain wallets and saving them to a CSV file.

## Features

- Generate multiple Initia wallets at once
- Save wallet information (mnemonic and address) to a CSV file
- Interactive command-line interface
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd initia-wallet-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Usage

1. Run the script:
```bash
npm run build
```
```bash
npm run start
```

2. Enter the number of wallets you want to generate when prompted.

3. The generated wallets will be saved to `wallets.csv` in the following format:
```csv
mnemonic,address
word1 word2 word3...,init1...
word1 word2 word3...,init1...
...
```

## Security Note

- Keep your generated wallet information secure
- Never share your mnemonic phrases
- The generated CSV file contains sensitive information, handle it with care

## License

MIT 