export interface GlossDef {
    para: string;
    GlossSeeAlso: string[];
}

export interface GlossEntry {
    ID: string;
    SortAs: string;
    GlossTerm: string;
    Acronym: string;
    Abbrev: string;
    GlossDef: GlossDef;
    GlossSee: string;
}

export interface GlossList {
    GlossEntry: GlossEntry;
}

export interface GlossDiv {
    title: string;
    GlossList: GlossList;
}

export interface Glossary {
    title: string;
    GlossDiv: GlossDiv;
}

export interface RootObject {
    glossary: Glossary;
}

