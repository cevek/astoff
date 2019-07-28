type CSSMixinId = 'CSSMixinId';
type CSSVarId = 'CSSVarId';
type CSSDollarVarId = 'CSSDollarVarId';
type CSSClassDeclarationId = 'CSSClassDeclarationId';

type CSSClassDeclaration = {
    id: CSSClassDeclarationId;
    kind: 'CSSClassDeclaration';
    props: CSSPropItem[];
};

type CSSVar = {
    kind: 'CSSVar';
    id: CSSVarId;
    value: CSSValue;
};

type CSSDollarVar = {
    kind: 'CSSDollarVar';
    id: CSSDollarVarId;
    value: CSSValue;
};

type CSSMixin = {
    kind: 'CSSMixin';
    id: CSSMixinId;
    params: {
        id: CSSDollarVarId;
        defaultValue: CSSValue | null;
    }[];
    canAcceptContentBlock: boolean;
    props: CSSPropItem[];
    loc: Loc;
};

type CSSValue = CSSTextValue | CSSResourceURL;

type CSSMixinCall = {
    kind: 'CSSMixinCall';
    mixinId: CSSMixinId;
    arguments: CSSValue[];
    content: CSSPropItem[];
    disabled: boolean;
    loc: Loc;
};

type CSSContent = {
    kind: 'CSSContent';
    disabled: boolean;
    loc: Loc;
};

type CSSMedia = {
    kind: 'CSSMedia';
    condition: CSSTextValue;
    props: CSSPropItem[];
    disabled: boolean;
    loc: Loc;
};

type CSSPropItem = CSSMixinCall | CSSContent | CSSMedia | CSSProperty | CSSPseudoSelector;

type CSSPseudoSelector = {
    kind: 'CSSPseudoSelector';
    value: string;
    props: CSSPropItem[];
    disabled: boolean;
};

type CSSProperty = {
    kind: 'CSSProperty';
    name: CSSPropertyName;
    value: CSSValue;
    block: CSSPropItem[];
    disabled: boolean;
    loc: Loc;
};

type CSSPropertyName = {
    kind: 'CSSPropertyName';
    value: (string | CSSDollarVarRef)[];
    loc: Loc;
};

type CSSVarRef = {
    kind: 'CSSVarRef';
    varId: CSSVarId;
    loc: Loc;
};

type CSSResourceURL = {
    kind: 'CSSResourceURL';
    resourceId: ResourceId;
    loc: Loc;
};

type CSSDollarVarRef = {
    kind: 'CSSDollarVarRef';
    varId: CSSDollarVarId;
    loc: Loc;
};

type CSSTextValue = {
    kind: 'CSSValue';
    value: (string | CSSVarRef | CSSDollarVarRef)[];
    loc: Loc;
};
