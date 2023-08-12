import React, { useState, KeyboardEvent } from 'react';
import {MolecularFormula} from "./types/molecular_formula.ts";

interface MoleculeInputProps {
    onEnterMolecule: (molecule: MolecularFormula) => void;
}

export const MoleculeInput: React.FC<MoleculeInputProps> = ({ onEnterMolecule }) => {
    const [molecule, setMolecule] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMolecule(event.target.value);
    };

    const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onEnterMolecule(molecule);
        }
    };

    const handleButtonClick = () => {
        onEnterMolecule(molecule);
    };

    return (
        <div>
            <input
                type="text"
                value={molecule}
                onChange={handleInputChange}
                onKeyPress={handleEnterPress}
                placeholder="Enter Molecular Formula"
            />
            <button onClick={handleButtonClick}>Enter Molecule</button>
        </div>
    );
};
