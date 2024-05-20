// test validating the data
import { expect } from "chai";
import { AlignDefaults } from "../src";
import { interactionsByTypeKey } from "../src/read";
import {
  interactionsByKey,
  interactionsByKeyPage,
} from "../src/read/interactionByKey";
import { interactionsByTypeKeyPage } from "../src/read/interactionsByTypeKey";

describe("test indexer", () => {
  it("get interactions by type key", async () => {
    const typeKey = AlignDefaults["post"].iTypeKey;
    const res = await interactionsByTypeKey(typeKey);
    expect(res.data.iTypeKey).to.equal(typeKey);
  });

  it("get interactions by page key", async () => {
    const typeKey = AlignDefaults["post"].iTypeKey;
    const res = await interactionsByTypeKeyPage(0);
    console.log(res);
    expect(res.data.data[0].iTypeKey).to.equal(typeKey);
  });

  it("get interactions by key", async () => {
    const iKey = AlignDefaults["post"].iKey;
    const res = await interactionsByKey(iKey);
    expect(res.data.iKey).to.equal(iKey);
  });

  it("get interactions by page key", async () => {
    const iKey = AlignDefaults["post"].iKey;
    const res = await interactionsByKeyPage(0);
    expect(res.data.data[0].iKey).to.equal(iKey);
  });
});
