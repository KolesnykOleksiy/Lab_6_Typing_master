export class EngWithPunctuationTextReader {
    constructor() {
        this._textFilePath = '../texts/EnglishWithPunctuation.txt';
    }
    async transformTextToArray() {
        try {
            const response = await fetch(this._textFilePath);
            const fileContent = await response.text();
            const wordsArray = fileContent.split(' ');
            return wordsArray;
        }
        catch (error) {
            console.error('Error reading file:', error);
            return [];
        }
    }
}
//# sourceMappingURL=EngWithPunctuationTextReader.js.map