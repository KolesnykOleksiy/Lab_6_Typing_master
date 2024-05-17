# Trainer of Touch typing
## Program functionality and run locally
1. Running locally
   1. Clone Repository.
   2. Open in IDE like PhpStorm and run index.html file in browser.
2. Program functionality

On the browser page, it is possible to choose text, language and number of words options. User can choose only the language, punctuation or the number of words, the words themselves are randomly selected from a large text document.
When you have selected it you can start typing the text (just press the first letter on the keyboard).The timer will start automatically.

If you enter the correct symbol, it turns green and the cursor moves on -
if not it will turn red until you enter the correct symbol.

When all symbols turn green, the timer will stop and you will receive a message with the result.

## Programming Principles
- **Single Responsibility Principle (SRP)**: for [example](./src/modules/TextDisplayer.ts) class for transforming text from .txt files. This class is only used to convert text to a specific format.
- **Open/Closed Principle (OCP):** to add new text (for typing), you need to create a new class, such as [this one](./src/modules/TextRiders/EngWithPunctuationTextReader.ts) under the common [interface](./src/modules/TextRiders/ITextReader.ts), and not change existing classes.
- **Liskov Substitution Principle (LSP):** I use [interface](./src/modules/TextRiders/ITextReader.ts) for working with classes in methods in other [classes](./src/modules/TextDisplayer.ts) (DisplayText method). I replace the child type with the parent type.
- **Dependency Inversion Principle (DIP):** I use [abstraction](./src/modules/TextRiders/ITextReader.ts) for .txt readers classes and [TextDisplayer.ts](./src/modules/TextDisplayer.ts) doesn't care about type of readers.
- **You aren't gonna need it (YAGNI)** unnecessary functionality is definitely not implemented :) I implemented the minimum functionality for the program to work.

## Design Patterns
 - **Factory Method Pattern:** implemented in [FactoryTextPicker](./src/modules/TextRiders/FactoryTextPicker.ts) class for creating different types texts readers.
 - **Observer:** implemented in [Timer](./src/modules/Timer.ts) class and is used in [timerDisplay](./view/timerDіsplay.js) script and allow efficiently update the user interface in response to changes in timer state, while keeping the code clean, modular, and easily extensible.
 - **Singleton:** implemented in [Timer](./src/modules/Timer.ts) class and allows to use a single timer for different scripts. It provides convenience and flexibility when working with the timer.

## Refactoring Technics
- **Extract Method** When I had  a code fragment that can be grouped together, I have moved  this code to a separate new method and replace the old code with a call to the method: [stopTyping and showResult](./view/text_comparator.js) methods
- **Remove Assignments to Parameters** When some value is assigned to a parameter inside method’s body I used a local variable instead of a parameter.
- **Consolidate Conditional Expression** When I have multiple conditionals that lead to the same result or action I consolidated all these conditionals in a single expression.
