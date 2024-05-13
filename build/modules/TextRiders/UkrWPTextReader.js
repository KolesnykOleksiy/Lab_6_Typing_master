export class UkrWPTextReader {
    constructor() {
        this._textFilePath = '../texts/UkrWithPunctuation.txt';
        // async getTenWords(): Promise<string[]> {
        //     try {
        //         const wordsArray = await this.transformTextToArray();
        //         const startIndex = Math.floor(Math.random() * (wordsArray.length - 10));
        //         const nextWords: string[] = wordsArray.slice(startIndex, startIndex + 10);
        //         return nextWords;
        //     } catch (error) {
        //         console.error('Error getting next words:', error);
        //         return [];
        //     }
        // }
        // async getThirtyWords(): Promise<string[]> {
        //     try {
        //         const wordsArray = await this.transformTextToArray();
        //         const startIndex = Math.floor(Math.random() * (wordsArray.length - 30));
        //         const nextWords: string[] = wordsArray.slice(startIndex, startIndex + 30);
        //         return nextWords;
        //     } catch (error) {
        //         console.error('Error getting next words:', error);
        //         return [];
        //     }
        // }
        //
        // async getSixtyWords(): Promise<string[]> {
        //     try {
        //         const wordsArray = await this.transformTextToArray();
        //         const startIndex = Math.floor(Math.random() * (wordsArray.length - 60));
        //         const nextWords: string[] = wordsArray.slice(startIndex, startIndex + 60);
        //         return nextWords;
        //     } catch (error) {
        //         console.error('Error getting next words:', error);
        //         return [];
        //     }
        // }
        //
        // async getHundredWords(): Promise<string[]> {
        //     try {
        //         const wordsArray = await this.transformTextToArray();
        //         const startIndex = Math.floor(Math.random() * (wordsArray.length - 100));
        //         const nextWords: string[] = wordsArray.slice(startIndex, startIndex + 100);
        //         return nextWords;
        //     } catch (error) {
        //         console.error('Error getting next words:', error);
        //         return [];
        //     }
        // }
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
//# sourceMappingURL=UkrWPTextReader.js.map