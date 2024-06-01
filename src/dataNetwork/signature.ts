import { recoverMessageAddress, verifyMessage } from "viem";
import { getId } from "../read";

export async function verifySignature(
  signature: `0x${string}` | undefined
): Promise<{ error: boolean; message: string }> {
  if (!signature) throw new Error("No signature provided");
  const message = `Upload to Align Network`;
  // get align id of the user
  const address = await recoverMessageAddress({
    message: message,
    signature,
  });

  //////////////////////////////////////////////////////////////
  //////////// Validations /////////////////////////////////////
  //////////////////////////////////////////////////////////////
  // validate signature matches address
  try {
    const valid = await verifyMessage({
      address: address,
      message: message,
      signature,
    });
    if (!valid) throw new Error("Failed: Invalid signature");
    // validate the user has an align id
    const id = await getId(address);
    if (!id.id) throw new Error("Failed:User does not have an Align Id");

    return { error: false, message: "success" };
  } catch (e) {
    return {
      error: true,
      message: (e as Error).message,
    };
  }
}
