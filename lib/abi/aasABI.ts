export const aasABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_alignIdContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyAttested",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "ClaimTypeExists",
    type: "error",
  },
  {
    inputs: [],
    name: "NewOwnerIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NoClaimType",
    type: "error",
  },
  {
    inputs: [],
    name: "NoHandoverRequest",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAlignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "claim",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "claimProof",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "attestationKey2",
        type: "bytes32",
      },
    ],
    name: "Attested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "claimType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "claimLink",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "fungible",
        type: "bool",
      },
    ],
    name: "ClaimTypeRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnershipHandoverCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnershipHandoverRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "alignIdContract",
    outputs: [
      {
        internalType: "contract AlignIdRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toAlignId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "claim",
        type: "string",
      },
      {
        internalType: "string",
        name: "claimProof",
        type: "string",
      },
    ],
    name: "attest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelOwnershipHandover",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "completeOwnershipHandover",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toAlignId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "claimIn",
        type: "string",
      },
    ],
    name: "getAttestationFungible",
    outputs: [
      {
        internalType: "string",
        name: "claimOut",
        type: "string",
      },
      {
        internalType: "string",
        name: "claimProof",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toAlignId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
    ],
    name: "getAttestationNonFungible",
    outputs: [
      {
        internalType: "string",
        name: "claimOut",
        type: "string",
      },
      {
        internalType: "string",
        name: "claimProof",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "claimType",
        type: "string",
      },
    ],
    name: "getClaimTypeKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "claimTypeKey",
        type: "bytes32",
      },
    ],
    name: "isClaimTypeRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "result",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "ownershipHandoverExpiresAt",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "attesterAlignId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fungible",
        type: "bool",
      },
      {
        internalType: "string",
        name: "claimType",
        type: "string",
      },
      {
        internalType: "string",
        name: "claimLink",
        type: "string",
      },
    ],
    name: "registerType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestOwnershipHandover",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_alignIdContract",
        type: "address",
      },
    ],
    name: "updateAlignIdContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
