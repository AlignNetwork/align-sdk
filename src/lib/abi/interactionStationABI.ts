export const interactionStationABI = [
  {
    type: "constructor",
    inputs: [
      { name: "_alignIdContract", type: "address", internalType: "address" },
      { name: "_verifyIPFS", type: "address", internalType: "address" },
      { name: "_initialFee", type: "uint256", internalType: "uint256" },
      { name: "_treasury", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "FEE_SETTER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PAUSER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WITHDRAWER_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addITypeCID",
    inputs: [
      { name: "iTypeKey", type: "bytes32", internalType: "bytes32" },
      { name: "iTypeCID", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "alignIdContract",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract AlignIdRegistry" },
    ],
    stateMutability: "view",
  },
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
    name: "createIType",
    inputs: [
      { name: "fungible", type: "bool", internalType: "bool" },
      { name: "onlyCreator", type: "bool", internalType: "bool" },
      { name: "name", type: "string", internalType: "string" },
      { name: "iTypeCID", type: "string", internalType: "string" },
      { name: "parentKeys", type: "bytes32[]", internalType: "bytes32[]" },
    ],
    outputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getICIDFungible",
    inputs: [
      { name: "issuerAlignId", type: "uint256", internalType: "uint256" },
      { name: "toAlignId", type: "uint256", internalType: "uint256" },
      { name: "iTypeKey", type: "bytes32", internalType: "bytes32" },
      { name: "iCID", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "exists", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getICIDNonFungible",
    inputs: [
      { name: "issuerAlignId", type: "uint256", internalType: "uint256" },
      { name: "toAlignId", type: "uint256", internalType: "uint256" },
      { name: "iTypeKey", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [{ name: "exists", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getITypeCID",
    inputs: [{ name: "iTypeKey", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "iCID", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getITypeKey",
    inputs: [
      { name: "issuerAlignId", type: "uint256", internalType: "uint256" },
      { name: "name", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "grantRoles",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "roles", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "hasAllRoles",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "roles", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasAnyRole",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "roles", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "interact",
    inputs: [
      { name: "toAlignId", type: "uint256", internalType: "uint256" },
      { name: "iTypeKey", type: "bytes32", internalType: "bytes32" },
      { name: "iCID", type: "string", internalType: "string" },
      { name: "parentIKey", type: "bytes32", internalType: "bytes32" },
    ],
    outputs: [
      { name: "iKey", type: "bytes32", internalType: "bytes32" },
      { name: "fungibleKey", type: "bytes32", internalType: "bytes32" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "isITypeRegistered",
    inputs: [{ name: "iTypeKey", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
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
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "protocolFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
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
    name: "renounceRoles",
    inputs: [{ name: "roles", type: "uint256", internalType: "uint256" }],
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
    name: "revokeRoles",
    inputs: [
      { name: "user", type: "address", internalType: "address" },
      { name: "roles", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "rolesOf",
    inputs: [{ name: "user", type: "address", internalType: "address" }],
    outputs: [{ name: "roles", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setPaused",
    inputs: [{ name: "_paused", type: "bool", internalType: "bool" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProtocolFee",
    inputs: [{ name: "newFee", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTreasury",
    inputs: [{ name: "newTreasury", type: "address", internalType: "address" }],
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
    type: "function",
    name: "treasury",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateAlignIdContract",
    inputs: [
      { name: "_alignIdContract", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOnlyCreator",
    inputs: [
      { name: "iTypeKey", type: "bytes32", internalType: "bytes32" },
      { name: "_onlyCreator", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyIPFS",
    inputs: [],
    outputs: [
      { name: "", type: "address", internalType: "contract VerifyIPFS" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ITypeCIDAdded",
    inputs: [
      {
        name: "iTypeKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      { name: "iCID", type: "string", indexed: false, internalType: "string" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ITypeRegistered",
    inputs: [
      {
        name: "iTypeKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "issuerAlignId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      { name: "name", type: "string", indexed: false, internalType: "string" },
      {
        name: "iTypeCID",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      { name: "fungible", type: "bool", indexed: false, internalType: "bool" },
      {
        name: "parentKeys",
        type: "bytes32[]",
        indexed: false,
        internalType: "bytes32[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "InteractionAdded",
    inputs: [
      { name: "iKey", type: "bytes32", indexed: true, internalType: "bytes32" },
      {
        name: "iTypeKey",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "issuerAlignId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAlignId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      { name: "iCID", type: "string", indexed: false, internalType: "string" },
      {
        name: "fungibleKey",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "parentIKey",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
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
    name: "PausedState",
    inputs: [
      { name: "paused", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProtocolFeeUpdated",
    inputs: [
      {
        name: "newFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RolesUpdated",
    inputs: [
      { name: "user", type: "address", indexed: true, internalType: "address" },
      {
        name: "roles",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TreasuryUpdated",
    inputs: [
      {
        name: "newTreasury",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawn",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "AlreadyInitialized", inputs: [] },
  { type: "error", name: "AlreadyInteracted", inputs: [] },
  { type: "error", name: "IncorrectAmount", inputs: [] },
  { type: "error", name: "InteractionTypeExists", inputs: [] },
  { type: "error", name: "NewOwnerIsZeroAddress", inputs: [] },
  { type: "error", name: "NoHandoverRequest", inputs: [] },
  { type: "error", name: "NoInteraction", inputs: [] },
  { type: "error", name: "NoInteractionType", inputs: [] },
  { type: "error", name: "NoTreasurySet", inputs: [] },
  { type: "error", name: "NotInteractionCreator", inputs: [] },
  { type: "error", name: "OnlyCreatorCanReference", inputs: [] },
  { type: "error", name: "Paused", inputs: [] },
  { type: "error", name: "Unauthorized", inputs: [] },
];
