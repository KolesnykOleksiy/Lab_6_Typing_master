import { ITextReader } from "./ITextReader.js";
import { EngNoPunctuationTextReader } from "./EngNoPunctuationTextReader.js";
import { EngWithPunctuationTextReader } from "./EngWithPunctuationTextReader.js";
import { UkrNoPunctuationTextReader } from "./UkrNoPunctuationTextReader.js";
import { UkrWithPunctuationTextReader } from "./UkrWithPunctuationTextReader.js";

export class FactoryTextPicker {
    chooseText(language: string, punctuation: string): ITextReader {
        if (language === 'ukrainian' && punctuation === 'withPunctuation') {
            return new UkrWithPunctuationTextReader();
        } else if (language === 'ukrainian' && punctuation === 'withoutPunctuation') {
            return new UkrNoPunctuationTextReader();
        } else if (language === 'english' && punctuation === 'withoutPunctuation') {
            return new EngNoPunctuationTextReader();
        } else {
            return new EngWithPunctuationTextReader();
        }
    }
}
