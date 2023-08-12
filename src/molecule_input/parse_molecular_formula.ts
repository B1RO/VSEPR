import {ElementSymbol} from "../types/element_symbol.ts";
import {ELEMENT_SYMBOLS} from "../data/element_symbol_data.ts";

export type MolecularFormula = Array<[ElementSymbol, number]>;

function parseMolecularFormula(formula: string): MolecularFormula | null {
    // Regular expression pattern to match element symbols and their counts.
    const pattern = /([A-Z][a-z]*)(\d*)/g;
    let match;
    const result: MolecularFormula = [];

    while ((match = pattern.exec(formula)) !== null) {
        const symbol = match[1] as ElementSymbol;
        const count = match[2] ? parseInt(match[2], 10) : 1;

        // Check if the parsed symbol is valid. If not, return null.
        if (!isValidElementSymbol(symbol)) {
            return null;
        }

        result.push([symbol, count]);
    }

    return result;
}

// Replace this function with a proper implementation if you have a list of valid element symbols.

function isValidElementSymbol(symbol: string): symbol is ElementSymbol {
    return ELEMENT_SYMBOLS.includes(symbol as ElementSymbol);
}

// Example usage:
const formula = "H2O";
const parsedFormula = parseMolecularFormula(formula);
if (parsedFormula !== null) {
    console.log(parsedFormula); // Output: [['H', 2], ['O', 1]]
} else {
    console.log("Invalid formula");
}
