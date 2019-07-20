type CSSIdentifier = {
    kind: 'CSSIdentifier';
    usages: CSSClassDeclaration[];
};

type CSSMedia = {
    kind: 'CSSMedia';
    type: string;
    loc: Loc;
};

type CSSClassDeclarationId = 'CSSClassDeclarationId';

type CSSClassDeclaration = {
    kind: 'CSSClassDeclaration';
    name: CSSIdentifier;
    props: AnyCSSProperty[];
    medias: {media: CSSMedia; props: AnyCSSProperty}[];
    loc: Loc;
};

type AnyCSSProperty = CSSProperty | CSSPropertyFileRef;

type CSSVar = {
    id: CSSVarId;
    kind: 'CSSVar';
    name: string;
    loc: Loc;
};

type CSSVarRef = {
    kind: 'CSSVarRef';
    varId: CSSVarId;
    loc: Loc;
};

interface CSSPropertyBase {
    kind: string;
    name: string;
    value: unknown;
    valueLoc: Loc;
    loc: Loc;
}

interface CSSProperty extends CSSPropertyBase {
    kind: 'CSSProperty';
}

interface CSSPropertyFileRef extends CSSPropertyBase {
    kind: 'CSSPropertyFileRef';
    value: ResourceId;
}

interface CSSPropertyWithVar extends CSSPropertyBase {
    kind: 'CSSPropertyFileRef';
    value: (string | CSSVarRef)[];
}
