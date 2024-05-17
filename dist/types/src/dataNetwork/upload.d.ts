export declare class UploadError extends Error {
    constructor(message: string);
}
export declare function upload(data: {
    [key: string]: string;
}): Promise<{
    error: boolean;
    cid: string;
    result?: string;
    data?: any;
}>;
//# sourceMappingURL=upload.d.ts.map