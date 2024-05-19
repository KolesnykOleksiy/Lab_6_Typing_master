import { ITextReader } from "./ITextReader.js";

export abstract class BaseTextReader implements ITextReader {
    protected abstract _textFilePath: string;

    async transformTextToArray(): Promise<string[]> {
        try {
            const response = await fetch(this._textFilePath);
            const fileContent: string = await response.text();
            return fileContent.split(' ');
        } catch (error) {
            console.error('Error reading file:', error);
            return [];
        }
    }
}
