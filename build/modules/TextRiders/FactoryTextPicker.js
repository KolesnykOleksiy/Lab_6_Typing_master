import { UkrWithPunctuationTextReader } from "./UkrWithPunctuationTextReader.js";
import { UkrNoPunctuationTextReader } from "./UkrNoPunctuationTextReader.js";
import { EngNoPunctuationTextReader } from "./EngNoPunctuationTextReader.js";
import { EngWithPunctuationTextReader } from "./EngWithPunctuationTextReader.js";
export class FactoryTextPicker {
    chooseText(language, punctuation) {
        if (language === 'ukrainian' && punctuation === 'withPunctuation') {
            this.textReader = new UkrWithPunctuationTextReader();
        }
        else if (language === 'ukrainian' && punctuation === 'withoutPunctuation') {
            this.textReader = new UkrNoPunctuationTextReader();
        }
        else if (language === 'english' && punctuation === 'withoutPunctuation') {
            this.textReader = new EngNoPunctuationTextReader();
        }
        else {
            this.textReader = new EngWithPunctuationTextReader();
        }
        return this.textReader;
    }
}
//# sourceMappingURL=FactoryTextPicker.js.map