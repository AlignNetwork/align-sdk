export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
// Method to validate the content object against the format
export const validate = (content, format) => {
    const requiredKeys = Object.keys(format.content);
    const contentKeys = Object.keys(content);
    const missingKeys = requiredKeys.filter((key) => !contentKeys.includes(key));
    const extraKeys = contentKeys.filter((key) => !requiredKeys.includes(key));
    if (missingKeys.length > 0) {
        throw new ValidationError(`Missing keys: ${missingKeys.join(", ")}`);
    }
    if (extraKeys.length > 0) {
        throw new ValidationError(`Extra keys: ${extraKeys.join(", ")}`);
    }
    return true;
};
