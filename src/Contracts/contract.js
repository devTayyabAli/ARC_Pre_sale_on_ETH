export const ico_contract = "0x954Df75F5C188B4315C762B541Db2D1b31B652Cd";
export const contractabi = [{
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "_USDC",
        "type": "address"
    }, {
        "internalType": "contract IERC20",
        "name": "_USDT",
        "type": "address"
    }, {
        "internalType": "bytes32",
        "name": "merkleroot",
        "type": "bytes32"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Deposited",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Recovered",
    "type": "event"
}, {
    "inputs": [],
    "name": "ARC_Sold",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCpricePerUSDC",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ARCpricePerUSDT",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_USDCAmount",
        "type": "uint256"
    }, {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
    }],
    "name": "BuyARCWithUSDC",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_USDTAmount",
        "type": "uint256"
    }, {
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
    }],
    "name": "BuyARCWithUSDT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
    }],
    "name": "EmergencyUSDT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "USDC",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "USDT",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "WL_Acces",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "_USDC",
        "type": "address"
    }, {
        "internalType": "contract IERC20",
        "name": "_USDT",
        "type": "address"
    }],
    "name": "changeUSDC",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "contractbalance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "deposits",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "getARCvalueperUSDC",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "getARCvalueperUSDT",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes32[]",
        "name": "proof",
        "type": "bytes32[]"
    }, {
        "internalType": "bytes32",
        "name": "leaf",
        "type": "bytes32"
    }],
    "name": "isValid",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxTokeninPresale",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bool",
        "name": "_state",
        "type": "bool"
    }],
    "name": "modify_WL_Acces",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "presaleStatus",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenAmount",
        "type": "uint256"
    }],
    "name": "recoverERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "resumePresale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "root",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_count",
        "type": "uint256"
    }],
    "name": "setRewardARCPriceperUSDC",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_count",
        "type": "uint256"
    }],
    "name": "setRewardARCPriceperUSDT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "name": "setmaxTokeninPresale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "stopPresale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "_root",
        "type": "bytes32"
    }],
    "name": "updateMerkleroot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}]



// export const WARC_Contract = "0xAbbBD6448C526831d72dC338aFA17D13a38b5Ca0";
// export const WARC_ABI = [{
//     "inputs": [],
//     "stateMutability": "nonpayable",

//     "type": "constructor"
// }, {
//     "anonymous": false,
//     "inputs": [{
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//     }, {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "Approval",
//     "type": "event"
// }, {
//     "anonymous": false,
//     "inputs": [{
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//     }, {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//     }, {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "Transfer",
//     "type": "event"
// }, {
//     "inputs": [{
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "Mint",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//     }, {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }],
//     "name": "allowance",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//     }],
//     "name": "approve",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//     }],
//     "name": "balanceOf",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//     }],
//     "name": "burn",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [{
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "subtractedValue",
//         "type": "uint256"
//     }],
//     "name": "decreaseAllowance",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "addedValue",
//         "type": "uint256"
//     }],
//     "name": "increaseAllowance",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "name",
//     "outputs": [{
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [{
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [{
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//     }],
//     "stateMutability": "view",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "recipient",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "transfer",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }, {
//     "inputs": [{
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//     }, {
//         "internalType": "address",
//         "name": "recipient",
//         "type": "address"
//     }, {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//     }],
//     "name": "transferFrom",
//     "outputs": [{
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//     }],
//     "stateMutability": "nonpayable",
//     "type": "function"
// }]
export const USDT_contract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const USDTabi = [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_upgradedAddress",
        "type": "address"
    }],
    "name": "deprecate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "deprecated",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_evilUser",
        "type": "address"
    }],
    "name": "addBlackList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "upgradedAddress",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "balances",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "maximumFee",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "_totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_maker",
        "type": "address"
    }],
    "name": "getBlackListStatus",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "address"
    }],
    "name": "allowed",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "paused",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "who",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newBasisPoints",
        "type": "uint256"
    }, {
        "name": "newMaxFee",
        "type": "uint256"
    }],
    "name": "setParams",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "amount",
        "type": "uint256"
    }],
    "name": "issue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "amount",
        "type": "uint256"
    }],
    "name": "redeem",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "basisPointsRate",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "isBlackListed",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_clearedUser",
        "type": "address"
    }],
    "name": "removeBlackList",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "MAX_UINT",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_blackListedUser",
        "type": "address"
    }],
    "name": "destroyBlackFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "name": "_initialSupply",
        "type": "uint256"
    }, {
        "name": "_name",
        "type": "string"
    }, {
        "name": "_symbol",
        "type": "string"
    }, {
        "name": "_decimals",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Issue",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Redeem",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "newAddress",
        "type": "address"
    }],
    "name": "Deprecate",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "feeBasisPoints",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "maxFee",
        "type": "uint256"
    }],
    "name": "Params",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_blackListedUser",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_balance",
        "type": "uint256"
    }],
    "name": "DestroyedBlackFunds",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_user",
        "type": "address"
    }],
    "name": "AddedBlackList",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_user",
        "type": "address"
    }],
    "name": "RemovedBlackList",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Pause",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Unpause",
    "type": "event"
}]
export const USDC_contract = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const USDCabi = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "authorizer",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }],
    "name": "AuthorizationCanceled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "authorizer",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }],
    "name": "AuthorizationUsed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "Blacklisted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "newBlacklister",
        "type": "address"
    }],
    "name": "BlacklisterChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "burner",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "newMasterMinter",
        "type": "address"
    }],
    "name": "MasterMinterChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Mint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "minterAllowedAmount",
        "type": "uint256"
    }],
    "name": "MinterConfigured",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "oldMinter",
        "type": "address"
    }],
    "name": "MinterRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Pause",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
    }],
    "name": "PauserChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "newRescuer",
        "type": "address"
    }],
    "name": "RescuerChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "UnBlacklisted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [],
    "name": "Unpause",
    "type": "event"
}, {
    "inputs": [],
    "name": "CANCEL_AUTHORIZATION_TYPEHASH",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
    "outputs": [{
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "authorizer",
        "type": "address"
    }, {
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }],
    "name": "authorizationState",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "blacklist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "blacklister",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "authorizer",
        "type": "address"
    }, {
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "cancelAuthorization",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "minterAllowedAmount",
        "type": "uint256"
    }],
    "name": "configureMinter",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "currency",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "decrement",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "increment",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "tokenName",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "tokenSymbol",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "tokenCurrency",
        "type": "string"
    }, {
        "internalType": "uint8",
        "name": "tokenDecimals",
        "type": "uint8"
    }, {
        "internalType": "address",
        "name": "newMasterMinter",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "newPauser",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "newBlacklister",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "newName",
        "type": "string"
    }],
    "name": "initializeV2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "lostAndFound",
        "type": "address"
    }],
    "name": "initializeV2_1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "isBlacklisted",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "isMinter",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "masterMinter",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }],
    "name": "minterAllowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "nonces",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pauser",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "permit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "validAfter",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "validBefore",
        "type": "uint256"
    }, {
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "receiveWithAuthorization",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }],
    "name": "removeMinter",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "tokenContract",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "rescueERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "rescuer",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "validAfter",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "validBefore",
        "type": "uint256"
    }, {
        "internalType": "bytes32",
        "name": "nonce",
        "type": "bytes32"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "transferWithAuthorization",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_account",
        "type": "address"
    }],
    "name": "unBlacklist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newBlacklister",
        "type": "address"
    }],
    "name": "updateBlacklister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newMasterMinter",
        "type": "address"
    }],
    "name": "updateMasterMinter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_newPauser",
        "type": "address"
    }],
    "name": "updatePauser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newRescuer",
        "type": "address"
    }],
    "name": "updateRescuer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "version",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}]