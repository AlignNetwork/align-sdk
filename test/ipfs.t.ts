// test validating the data
import { expect } from "chai";
import { getContent, validate } from "../src";
import { AlignDefaults } from "../src/dataNetwork/defaults";
import { upload } from "../src/dataNetwork/upload";
import { ValidationError } from "../src/dataNetwork/validate";

describe("test ipfs", () => {
  it("should validate success", async () => {
    const data = {
      from: "1",
      post: "This is the first post, for testing!",
      image: "imageurl",
      dateOf: "1715959249",
    };

    const defaultFormat = AlignDefaults["post"];
    // validte the incoming data is in the correct format
    let res = await validate(data, defaultFormat);
    expect(res).to.be.true;
  });

  it("should validate failure", async () => {
    const data = {
      from: "1",
      post: "This is the first post, for testing!",
      image: "imageurl",
    };

    const defaultFormat = AlignDefaults["post"];
    // validte the incoming data is in the correct format
    expect(() => validate(data, defaultFormat)).to.throw(
      ValidationError,
      "Missing keys: dateOf"
    );
  });

  it("should validate failure", async () => {
    const data = {
      from: "1",
      post: "This is the first post, for testing!",
      image: "imageurl",
      dateOf: "1715959249",
      extraKey: "extraValue",
    };

    const defaultFormat = AlignDefaults["post"];
    // validte the incoming data is in the correct format
    expect(() => validate(data, defaultFormat)).to.throw(
      ValidationError,
      "Extra keys: extraKey"
    );
  });
});

// test uploading the data to ipfs
describe("test uploading interaction to ipfs", () => {
  let data: any = {};
  beforeEach(async () => {
    // clear the ipfs pins before each test
  });

  it("should upload success", async () => {
    // should be new data each time
    data = {
      from: "1",
      post: "This is the first post, for testing!",
      image: "imageurl",
      dateOf: Date.now().toLocaleString(),
    };

    const defaultFormat = AlignDefaults["post"];
    // validte the incoming data is in the correct format
    await validate(data, defaultFormat);
    const uploadResult = await upload(data);
    console.log(uploadResult);
    expect(uploadResult.error).to.be.false;
    expect(uploadResult.cid).to.be.a("string");
  });
});

describe(" test getting cid from ipfs", () => {
  it("should get cid", async () => {
    const cid = "bafyreifoo4xnhb75675opkpkr5g6jrdxxjk5sutvmilprlqhx2wgt6thiu";
    const result = await getContent(cid);
    console.log(result);
  });
});
