export class TextDisplayer {
    constructor(textReader) {
        this._textReader = textReader;
    }
    async DisplayText(numWords) {
        const wordsArray = await this._textReader.transformTextToArray();
        const startIndex = Math.floor(Math.random() * (wordsArray.length - numWords));
        const selectedWords = wordsArray.slice(startIndex, startIndex + numWords);
        return selectedWords.join(' ');
    }
    async DisplayTenWordsText() {
        return this.DisplayText(10);
    }
    async DisplayThirtyWordsText() {
        return this.DisplayText(30);
    }
    async DisplaySixtyWordsText() {
        return this.DisplayText(60);
    }
}
//# sourceMappingURL=TextDisplayer.js.map