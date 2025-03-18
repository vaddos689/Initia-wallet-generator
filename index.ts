import { MnemonicKey } from '@initia/initia.js';
import { ethers } from 'ethers';
import * as fs from 'fs';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateWallets(count: number): void {
    let csvContent = 'mnemonic,address,evm_private_key\n';
    
    for (let i = 0; i < count; i++) {
        const key = new MnemonicKey();
        // Get EVM private key from mnemonic
        const evmWallet = ethers.Wallet.fromPhrase(key.mnemonic);
        const evmPrivateKey = evmWallet.privateKey;
        
        csvContent += `${key.mnemonic},${key.accAddress},${evmPrivateKey}\n`;
    }

    fs.writeFileSync('wallets.csv', csvContent);
    console.log(`Generated ${count} wallets and saved to wallets.csv`);
    rl.close();
}

rl.question('Enter the number of wallets to generate: ', (answer) => {
    const count = parseInt(answer);
    if (isNaN(count) || count <= 0) {
        console.log('Please enter a valid positive number');
        rl.close();
        return;
    }
    generateWallets(count);
});