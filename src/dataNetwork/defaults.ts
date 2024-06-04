export const AlignDefaults = {
  blog: {
    iTypeKey:
      "0x4e272e5284dcb71e6db9d712da73da7a26bad2db5adb4414c465a25032d53797" as `0x${string}`,
    iKey: "0x4bf7488a263c274e6a3297f0ac528e036c15c1af1088f51d73d6cf6cbe72848f" as `0x${string}`,
    parentKeys:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    cid: "bafyreievxqcpnsjlbupugzaqkklrqcd3ngs7wbcmfzq4ulsnpahykdonkm",
    name: "Blog2",
    content: {
      from: "align id of poster",
      post: "content of post",
      image: "link to image",
      dateOf: "date posted",
    },
    summary:
      "This is a blog post, it will have no more than 100,000 characters. General accepted rules of decency when posting, similar to X (formerly Twitter) rules and policies.",
    version: "0.1.0",
  },
  post: {
    iTypeKey:
      "0x37bc0487179bf0e5859e1e81de587362f08f1e99a4dd4818e7ec9db5acbe85d4" as `0x${string}`,
    iKey: "0x4bf7488a263c274e6a3297f0ac528e036c15c1af1088f51d73d6cf6cbe72848f" as `0x${string}`,
    parentKeys:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    cid: "bafyreibocgt3asopt2oqetfv5q5jdfnxg76v6bag73hnkbbhja7fp7xeum",
    name: "post",
    content: {
      from: "align id of poster",
      post: "content of post",
      image: "link to image",
      dateOf: "date posted",
    },
    summary:
      "This is a simple post, it will have no more than 128 characters. General accepted rules of decency when posting, similar to X (formerly Twitter) rules and policies.",
    version: "0.1.0",
  },
  dispute: {
    iTypeKey:
      "0x5ccef2e75faf813914ca81514683bb551f97b0dabb1a7b88078d8d047c8d71d1" as `0x${string}`,
    iKey: "0x4bf7488a263c274e6a3297f0ac528e036c15c1af1088f51d73d6cf6cbe72848f" as `0x${string}`,
    parentKeys:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    cid: "bafyreibmg53z2thea54g7enkdnq7lsiphe2o5d4yu24qoccwcdbnnd3bdq",
    name: "dispute",
    content: {
      to: "align id of recipient",
      claim: "content of claim",
      dateOf: "date posted",
    },
    summary:
      "This is a simple dispute tracker, place all relevant information inside claim.",
    version: "0.1.0",
  },
  points: {
    iTypeKey:
      "0xeb5b8c1f556f61bc01e9276ec4536dbe23e4240b8487374f984d6031e5cd21dc" as `0x${string}`,
    iKey: "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    parentKeys:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    cid: "bafyreidnovk7f623pmuueex3p2icqcc2see22cwxxhkwfkscbuaajdnai4",
    name: "points",
    content: {
      from: "align id of awarder",
      amount: "number of points",
      dateOf: "date awarded",
    },
    summary: "This is a simple points tracker.",
    version: "0.1.0",
  },
  profile: {
    iTypeKey:
      "0xb6d1f1aa465d29f35034cd29eaacc41f1841ea6d4f648d5b1f4541ac0cc731bd" as `0x${string}`,
    iKey: "0xb6d1f1aa465d29f35034cd29eaacc41f1841ea6d4f648d5b1f4541ac0cc731bd" as `0x${string}`,
    parentKeys:
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
    cid: "bafyreifn3firvc5zqc7vb6z7ebomhlyrju4rsepo6sodxaykgcbpq5khby",
    version: "0.1.1",
    name: "align profile",
    summary: "This is an Align Profile.",
    content: {
      image: "link to image",
      name: "name of profile",
      bio: "short 10000 character bio",
    },
  },
};
