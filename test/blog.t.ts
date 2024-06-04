// test validating the data
import { privateKeyToAccount } from "viem/accounts";
import { AlignDefaults } from "../src";
import { upload } from "../src/dataNetwork/upload";
import { createInteractionType } from "../src/interactions/createInteractionType";
import { interactOnchain } from "../src/interactions/interact";

describe("test create blog", () => {
  it("createIType", async () => {
    const alignId = 1;
    const myContent = {
      emoji: "an emoji for the blog.",
    };

    // parent - from, post image, dateOf
    const parentKey = AlignDefaults["blog"].iTypeKey;

    // add in my content and change name
    const dataWithMyAdditions = {
      content: { ...AlignDefaults["blog"].content, ...myContent },
      summary: AlignDefaults["blog"].summary,
      version: AlignDefaults["blog"].version,
      name: `#${alignId} blog`,
    };

    const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
    const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
    let uploadResult;
    try {
      // upload resulting data to ipfs
      uploadResult = await upload(dataWithMyAdditions);
    } catch (error) {
      uploadResult = {
        cid: "bafyreibnu6ii47ny2zbg37tajvusiykildvcpb4i67bqib444xbk74m4gu",
        error: false,
        result: "",
        data: "",
      };
    }
    // create the interaction type
    try {
      await createInteractionType(uploadResult.cid, [parentKey], account);
    } catch (error) {}
    // get the interaction type key from the newly created interaction type
    // TODO: manually create the interaction type key?
    const dataWithMyInteractions = {
      from: "1",
      post: "This is the first bog, for testing!",
      image: "imageurl",
      dateOf: new Date().toLocaleString(),
      emoji: "👋",
    };
    let uploadedInteraction = await upload(dataWithMyInteractions);
    // interact with the interaction type
    await interactOnchain(
      "0x74e682afd9b9bc41eb4a239338823a58970f779d72d3a1c02a829c45727b5fb0" as `0x${string}`,
      1n,
      uploadedInteraction.cid,
      "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
      account
    );
  });
});
