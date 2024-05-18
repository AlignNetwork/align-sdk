import { alignUrls } from "../../lib";
export class UploadError extends Error {
    constructor(message) {
        super(message);
        this.name = "UploadError";
    }
}
const dataNetworkUrl = alignUrls.ipfs;
export async function upload(data) {
    const res = await fetch(`${dataNetworkUrl}/upload`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let result = (await res.json());
    if (result.error) {
        throw new UploadError(result.result);
    }
    return {
        error: result.error,
        result: result.result,
        data: result.data,
        cid: result.cid,
    };
}
