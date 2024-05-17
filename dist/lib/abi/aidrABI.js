export const aidrABI = [
    { type: "constructor", inputs: [], stateMutability: "nonpayable" },
    {
        type: "function",
        name: "cancelOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "completeOwnershipHandover",
        inputs: [
            { name: "pendingOwner", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "devCounter",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "idCounter",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "idOf",
        inputs: [{ name: "owner", type: "address", internalType: "address" }],
        outputs: [{ name: "alignId", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [{ name: "result", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "ownershipHandoverExpiresAt",
        inputs: [
            { name: "pendingOwner", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "result", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "readId",
        inputs: [{ name: "to", type: "address", internalType: "address" }],
        outputs: [{ name: "alignId", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "register",
        inputs: [{ name: "to", type: "address", internalType: "address" }],
        outputs: [{ name: "alignId", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "registerDev",
        inputs: [{ name: "to", type: "address", internalType: "address" }],
        outputs: [{ name: "alignId", type: "uint256", internalType: "uint256" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "requestOwnershipHandover",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "transferId",
        inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "OwnershipHandoverCanceled",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipHandoverRequested",
        inputs: [
            {
                name: "pendingOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "oldOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Register",
        inputs: [
            { name: "to", type: "address", indexed: true, internalType: "address" },
            { name: "id", type: "uint256", indexed: true, internalType: "uint256" },
        ],
        anonymous: false,
    },
    { type: "error", name: "AlreadyInitialized", inputs: [] },
    { type: "error", name: "IdExists", inputs: [] },
    { type: "error", name: "IncorrectId", inputs: [] },
    { type: "error", name: "NewOwnerIsZeroAddress", inputs: [] },
    { type: "error", name: "NoHandoverRequest", inputs: [] },
    { type: "error", name: "NoId", inputs: [] },
    { type: "error", name: "NotId", inputs: [] },
    { type: "error", name: "Unauthorized", inputs: [] },
];
