const elements: Record<string, ElementData> = {
    H: { name: "Hydrogen", electronegativity: 2.20 },
    He: { name: "Helium", electronegativity: null },
    Li: { name: "Lithium", electronegativity: 0.98 },
    Be: { name: "Beryllium", electronegativity: 1.57 },
    B: { name: "Boron", electronegativity: 2.04 },
    C: { name: "Carbon", electronegativity: 2.55 },
    N: { name: "Nitrogen", electronegativity: 3.04 },
    O: { name: "Oxygen", electronegativity: 3.44 },
    F: { name: "Fluorine", electronegativity: 3.98 },
    Ne: { name: "Neon", electronegativity: null },
    Na: { name: "Sodium", electronegativity: 0.93 },
    Mg: { name: "Magnesium", electronegativity: 1.31 },
    Al: { name: "Aluminum", electronegativity: 1.61 },
    Si: { name: "Silicon", electronegativity: 1.90 },
    P: { name: "Phosphorus", electronegativity: 2.19 },
    S: { name: "Sulfur", electronegativity: 2.58 },
    Cl: { name: "Chlorine", electronegativity: 3.16 },
    Ar: { name: "Argon", electronegativity: null },
    K: { name: "Potassium", electronegativity: 0.82 },
    Ca: { name: "Calcium", electronegativity: 1.00 },
    Sc: { name: "Scandium", electronegativity: 1.36 },
    Ti: { name: "Titanium", electronegativity: 1.54 },
    V: { name: "Vanadium", electronegativity: 1.63 },
    Cr: { name: "Chromium", electronegativity: 1.66 },
    Mn: { name: "Manganese", electronegativity: 1.55 },
    Fe: { name: "Iron", electronegativity: 1.83 },
    Ni: { name: "Nickel", electronegativity: 1.91 },
    Co: { name: "Cobalt", electronegativity: 1.88 },
    Cu: { name: "Copper", electronegativity: 1.90 },
    Zn: { name: "Zinc", electronegativity: 1.65 },
    Ga: { name: "Gallium", electronegativity: 1.81 },
    Ge: { name: "Germanium", electronegativity: 2.01 },
    As: { name: "Arsenic", electronegativity: 2.18 },
    Se: { name: "Selenium", electronegativity: 2.55 },
    Br: { name: "Bromine", electronegativity: 2.96 },
    Kr: { name: "Krypton", electronegativity: null },
    Rb: { name: "Rubidium", electronegativity: 0.82 },
    Sr: { name: "Strontium", electronegativity: 0.95 },
    Y: { name: "Yttrium", electronegativity: 1.22 },
    Zr: { name: "Zirconium", electronegativity: 1.33 },
    Nb: { name: "Niobium", electronegativity: 1.6 },
    Mo: { name: "Molybdenum", electronegativity: 2.16 },
    Tc: { name: "Technetium", electronegativity: 1.9 },
    Ru: { name: "Ruthenium", electronegativity: 2.2 },
    Rh: { name: "Rhodium", electronegativity: 2.28 },
    Pd: { name: "Palladium", electronegativity: 2.20 },
    Ag: { name: "Silver", electronegativity: 1.93 },
    Cd: { name: "Cadmium", electronegativity: 1.69 },
    In: { name: "Indium", electronegativity: 1.78 },
    Sn: { name: "Tin", electronegativity: 1.96 },
    Sb: { name: "Antimony", electronegativity: 2.05 },
    Te: { name: "Tellurium", electronegativity: 2.1 },
    I: { name: "Iodine", electronegativity: 2.66 },
    Xe: { name: "Xenon", electronegativity: 2.6 },
    Cs: { name: "Cesium", electronegativity: 0.79 },
    Ba: { name: "Barium", electronegativity: 0.89 },
    La: { name: "Lanthanum", electronegativity: 1.10 },
    Ce: { name: "Cerium", electronegativity: 1.12 },
    Pr: { name: "Praseodymium", electronegativity: 1.13 },
    Nd: { name: "Neodymium", electronegativity: 1.14 },
    Pm: { name: "Promethium", electronegativity: 1.13 },
    Sm: { name: "Samarium", electronegativity: 1.17 },
    Eu: { name: "Europium", electronegativity: 1.2 },
    Gd: { name: "Gadolinium", electronegativity: 1.20 },
    Tb: { name: "Terbium", electronegativity: 1.20 },
    Dy: { name: "Dysprosium", electronegativity: 1.22 },
    Ho: { name: "Holmium", electronegativity: 1.23 },
    Er: { name: "Erbium", electronegativity: 1.24 },
    Tm: { name: "Thulium", electronegativity: 1.25 },
    Yb: { name: "Ytterbium", electronegativity: 1.1 },
    Lu: { name: "Lutetium", electronegativity: 1.27 },
    Hf: { name: "Hafnium", electronegativity: 1.3 },
    Ta: { name: "Tantalum", electronegativity: 1.5 },
    W: { name: "Tungsten", electronegativity: 2.36 },
    Re: { name: "Rhenium", electronegativity: 1.9 },
    Os: { name: "Osmium", electronegativity: 2.2 },
    Ir: { name: "Iridium", electronegativity: 2.2 },
    Pt: { name: "Platinum", electronegativity: 2.28 },
    Au: { name: "Gold", electronegativity: 2.54 },
    Hg: { name: "Mercury", electronegativity: 2.00 },
    Tl: { name: "Thallium", electronegativity: 1.62 },
    Pb: { name: "Lead", electronegativity: 2.33 },
    Bi: { name: "Bismuth", electronegativity: 2.02 },
    Po: { name: "Polonium", electronegativity: 2.0 },
    At: { name: "Astatine", electronegativity: 2.2 },
    Rn: { name: "Radon", electronegativity: null },
    Fr: { name: "Francium", electronegativity: null },
    Ra: { name: "Radium", electronegativity: null },
    Ac: { name: "Actinium", electronegativity: 1.1 },
    Th: { name: "Thorium", electronegativity: 1.3 },
    Pa: { name: "Protactinium", electronegativity: 1.5 },
    U: { name: "Uranium", electronegativity: 1.38 },
    Np: { name: "Neptunium", electronegativity: 1.36 },
    Pu: { name: "Plutonium", electronegativity: 1.28 },
    Am: { name: "Americium", electronegativity: 1.3 },
    Cm: { name: "Curium", electronegativity: 1.3 },
    Bk: { name: "Berkelium", electronegativity: 1.3 },
    Cf: { name: "Californium", electronegativity: 1.3 },
    Es: { name: "Einsteinium", electronegativity: 1.3 },
    Fm: { name: "Fermium", electronegativity: 1.3 },
    Md: { name: "Mendelevium", electronegativity: 1.3 },
    No: { name: "Nobelium", electronegativity: 1.3 },
    Lr: { name: "Lawrencium", electronegativity: 1.3 },
    Rf: { name: "Rutherfordium", electronegativity: null },
    Db: { name: "Dubnium", electronegativity: null },
    Sg: { name: "Seaborgium", electronegativity: null },
    Bh: { name: "Bohrium", electronegativity: null },
    Hs: { name: "Hassium", electronegativity: null },
    Mt: { name: "Meitnerium", electronegativity: null },
    Ds: { name: "Darmstadtium", electronegativity: null },
    Rg: { name: "Roentgenium", electronegativity: null },
    Cn: { name: "Copernicium", electronegativity: null },
    Nh: { name: "Nihonium", electronegativity: null },
    Fl: { name: "Flerovium", electronegativity: null },
    Mc: { name: "Moscovium", electronegativity: null },
    Lv: { name: "Livermorium", electronegativity: null },
    Ts: { name: "Tennessine", electronegativity: null },
    Og: { name: "Oganesson", electronegativity: null },
};
