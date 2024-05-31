import type { Account, TransactionReceipt } from "viem";
import { AlignDefaults } from "./dataNetwork/defaults";
import { UploadError, upload } from "./dataNetwork/upload";
import { ValidationError, validate } from "./dataNetwork/validate";
import { InteractError, interactOnchain } from "./interactions/interact";

// take in a interactionTypeKey and then get the link from the registry and then get the format from IPFS
/* export async function interact(data: { [key: string]: string }, interactionTypeKey:): Promise<any> {
  const isValid = await validate(data, format);
  const res = await upload(data);
  const interactionTypeKey = await getInteractionTypeKey(res.data);
  return await interactOnchain(interactionTypeKey, res.data, res.data);
}
 */

// take in interaction IPFS CID and get it from the network, this step bypasses checking the onchain registry for convenience
// default types are blog, post, dispute, points, and alignPoints
export async function interactDefaults(
  data: { [key: string]: string },
  toAlignId: bigint,
  defaultType: keyof typeof AlignDefaults,
  account: Account,
  signature: string
): Promise<{ success: boolean; receipt?: TransactionReceipt | Error }> {
  try {
    // search AlignDefaults for the defaultType
    const defaultFormat = AlignDefaults[defaultType];
    // validte the incoming data is in the correct format
    await validate(data, defaultFormat);
    // upload the data to IPFS, throws error if it fails
    const uploadResult = await upload(data, signature);
    // get the interaction type key from the registry, unless provided
    //const interactionTypeKey = await getInteractionTypeKey();
    let res = await interactOnchain(
      defaultFormat.iTypeKey,
      toAlignId,
      uploadResult.cid,
      defaultFormat.parentKeys,
      account
    );
    return res;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Error validating data: ", error.message);
      throw error;
    }
    if (error instanceof UploadError) {
      console.error("Error uploading data: ", error.message);
      throw error;
    }
    if (error instanceof InteractError) {
      console.error("Error interacting with default type: ", error.message);
      throw error;
    }
    console.error("Error interacting with default type:", error);
    throw error;
  }
}
