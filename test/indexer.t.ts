// test validating the data
import { expect } from "chai";
import { AlignDefaults } from "../src";
import { interactionsByKeyPage } from "../src/read/interactionByKey";
import { interactionsByTypeKeyPage } from "../src/read/interactionsByTypeKey";

describe("test indexer", () => {
  it("get interactions by page key", async () => {
    const typeKey = AlignDefaults["post"].iTypeKey;
    const res = await interactionsByTypeKeyPage(typeKey, 0);
    console.log(res);
    expect(res.data.data[0].iTypeKey).to.equal(typeKey);
  });

  it("get interactions by page key", async () => {
    const iKey = AlignDefaults["post"].iKey;
    const res = await interactionsByKeyPage(iKey, 0);
    expect(res.data.data[0].iKey).to.equal(iKey);
  });
});
