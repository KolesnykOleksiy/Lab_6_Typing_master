export interface ITextReader{
    transformTextToArray(): Promise<string[]>;
    // getTenWords(): Promise<string[]>;
    // getThirtyWords(): Promise<string[]>;
    // getHundredWords(): Promise<string[]>;
}