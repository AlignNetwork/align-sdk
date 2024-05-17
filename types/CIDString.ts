type CIDv1String = string;

export const isValidCIDv1 = (cid: CIDv1String): boolean => {
  // Regex to match base58btc encoded CID v1 strings starting with 'z'
  const cidv1Regex = /^z[1-9A-HJ-NP-Za-km-z]+$/;
  return cidv1Regex.test(cid);
};
