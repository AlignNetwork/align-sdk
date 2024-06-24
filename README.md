<div align="center">

![background](https://github.com/AlignNetwork/align-sdk/assets/61569650/ad422cba-e273-4c98-ad6c-31766209f1a2)

</div>

<h2 align="center">Align SDK</h2>
<br />
<p align="center">

<br/>
<a href="https://twitter.com/align_network">Twitter</a> | 
<a href="https://warpcast.com/~/channel/align">Warpcast</a>

> [!CAUTION]
> UNSTABLE. This repo changes rapidly and the contracts are updated frequently.
> An SDK for interacting with the Align Network

## Usage

To use the SDK, ensure that your root component is wrapped with the `AlignProvider`.

### Example

```tsx
import { alignEnv } from "@/app/providers";
import { AlignDefaults, interactionStationABI } from "@align-network/align-sdk";

// Step 1. Upload to Network
const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  let file = event.target.files?.[0];
  if (!file) return;
  if (event.target.files?.[0]) {
    setFileStatus(true);
  }
  let fileBuffer = await readFileAsUint8Array(file);
  let data = await uploadFile(file.name, fileBuffer, file, env);
  console.log("data", data);
  setImage(data.cid);
  if (!data.error) {
    toast.success("Upload Success", {
      position: "top-center",
    });
  } else {
    toast.error("Upload Failed", {
      description: data.result,
      position: "top-center",
    });
  }
};

// Step 2
export async function interactFile(
  toAlignId: bigint,
  cid: string,
  type: "file" | "meme" | "nft"
) {
  //if (!data) return;
  //let uploadedInteraction = await upload(data, true);
  // interact with the interaction type
  try {
    const { request } = await simulateContract(wagmiConfig, {
      address: alignEnv.interactionStation,
      abi: interactionStationABI,
      functionName: "interact",
      args: [
        toAlignId,
        AlignDefaults[type].iTypeKey as `0x${string}`,
        cid,
        "0x0000000000000000000000000000000000000000000000000000000000000000" as `0x${string}`,
      ],
      value: parseEther("0.00028"),
    });
    const hash = await writeContract(wagmiConfig, request);

    const receipt = await waitForTransactionReceipt(wagmiConfig, {
      hash: hash,
    });
    return {
      success: true,
      receipt: receipt,
    };
  } catch (err) {
    if (err instanceof BaseError) {
      const revertError = err.walk(
        (err) => err instanceof ContractFunctionRevertedError
      );
      if (revertError instanceof ContractFunctionRevertedError) {
        const errorName = revertError.data?.errorName ?? "";
        throw new InteractError(errorName);
      }
    }
    console.log("err", err);
    throw new InteractError("Unknown error, make sure you have an Align Id");
  }
}

return (
  <>
    <Button className="w-full" variant="outline" onClick={handleButtonClick}>
      <UploadIcon className="" color="black" />
    </Button>
    <input
      type="file"
      ref={fileInputRef}
      style={{ display: "none" }}
      onChange={handleFileUpload}
    />
    <Button
      className="w-1/3"
      disabled={!fileStatus}
      onMouseDown={async () => {
        try {
          let data = await interactFile(alignId as bigint, image, fileType);
          if (data.success) {
            toast.success("Pinning Success", {
              position: "top-center",
            });
          }
        } catch (e) {
          console.log(e);
          toast.error("Pinning Failed", {
            description: (e as InteractError)?.message,
            position: "top-center",
          });
        }
      }}
    >
      Pin
    </Button>
  </>
);
```

Align Default Interaction Types:

1. `file`
2. `nft`
3. `meme`

```

```
