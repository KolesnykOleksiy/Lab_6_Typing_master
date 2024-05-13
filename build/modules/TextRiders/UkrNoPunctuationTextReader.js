export class UkrNoPunctuationTextReader {
    constructor() {
        this._textFilePath = '../texts/UkrNoPunctuation.txt';
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
//# sourceMappingURL=UkrNoPunctuationTextReader.js.map