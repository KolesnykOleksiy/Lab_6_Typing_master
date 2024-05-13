import {ITextReader} from "./TextRiders/ITextReader.js";

export class TextDisplayer {
    private _textReader: ITextReader;

    constructor(textReader: ITextReader) {
        this._textReader = textReader;
    }

    public async DisplayText(numWords: number): Promise<string> {
        const wordsArray: string[] = await this._textReader.transformTextToArray();
        const startIndex = Math.floor(Math.random() * (wordsArray.length - numWords));
        const selectedWords: string[] = wordsArray.slice(startIndex, startIndex + numWords);
        return selectedWords.join(' ');
    }

    public async DisplayTenWordsText(): Promise<string> {
        return this.DisplayText(10);
    }

    public async DisplayThirtyWordsText(): Promise<string> {
        return this.DisplayText(30);
    }

    public async DisplaySixtyWordsText(): Promise<string> {
        return this.DisplayText(60);
    }
}