interface ExpressionNode {
    loc: Loc;
    scopeId: ScopeId;
    typeId: TypeId;
    params: unknown;
}

type Expression =
    | JSXElement
    | JSXComponent
    | Paren
    | Unary
    | Binary
    | DefaultValue
    | Condition
    | Call
    | Foreach
    | FunctionExpression
    | ActionCallback
    | IdentifierRef
    | FileRef
    | NamedAccess
    | ElementAccess
    | StringConcat
    | Literal
    | RegexpLiteral
    | ObjectLiteral
    | ArrayLiteral;

interface FileRef extends ExpressionNode {
    kind: 'FileRef';
    params: {
        fileId: ResourceId;
    };
}

interface IdentifierRef extends ExpressionNode {
    kind: 'IdentifierRef';
    params: {
        identifier: IdentifierId;
    };
}

interface Paren extends ExpressionNode {
    kind: 'Paren';
    params: {
        value: Expression;
    };
}
interface Literal extends ExpressionNode {
    kind: 'Literal';
    params: {
        value: string | number | boolean | null | undefined;
    };
}

interface RegexpLiteral extends ExpressionNode {
    kind: 'RegexpLiteral';
    params: {
        pattern: string;
        flags: string;
    };
}

interface Unary extends ExpressionNode {
    kind: 'Unary';
    params: {
        operator: '!' | '+';
        argument: Expression;
    };
}

interface Binary extends ExpressionNode {
    kind: 'Binary';
    params: {
        left: Expression;
        operator: '+' | '-' | '*' | '/' | '**' | '&&' | '||' | '>' | '<' | '>=' | '<=' | '===' | '!==' | 'in';
        right: Expression;
    };
}

interface DefaultValue extends ExpressionNode {
    kind: 'DefaultValue';
    params: {
        value: Expression;
    };
}

interface StringConcat extends ExpressionNode {
    kind: 'StringConcat';
    params: {
        values: Expression[];
    };
}

interface Condition extends ExpressionNode {
    kind: 'Condition';
    params: {
        condition: Expression;
        whenTrue: Expression;
        whenFalse: Expression;
    };
}

interface FunctionExpression extends ExpressionNode {
    kind: 'FunctionExpression';
    params: {
        body: Expression;
        parameters: Parameter[];
    };
}

interface ActionCallback extends ExpressionNode {
    kind: 'ActionCallback';
    params: {
        name: string;
        statements: Expression[];
        parameters: Parameter[];
    };
}

interface Foreach extends ExpressionNode {
    kind: 'Foreach';
    params: {
        child: Expression;
        itemIdent: IdentifierId;
        indexIdent: IdentifierId | null;
    };
}

type Parameter = {
    kind: 'Parameter';
    identifier: IdentifierId;
    initializer: Expression | null;
    scopeId: ScopeId;
    typeId: TypeId;
    loc: Loc;
};

interface Call extends ExpressionNode {
    kind: 'Call';
    params: {
        context: Expression | null;
        functionId: FunctionId;
        arguments: Expression[];
    };
}

interface NamedAccess extends ExpressionNode {
    kind: 'NamedAccess';
    params: {
        name: string;
        propertyId: PropertyId;
        expression: Expression;
    };
}

interface ElementAccess extends ExpressionNode {
    kind: 'ElementAccess';
    params: {
        element: Expression;
        expression: Expression;
    };
}

interface JSXElement extends ExpressionNode {
    kind: 'JSXElement';
    params: {
        tagName: string;
        classNameId: CSSClassDeclarationId | null;
        classNameMods: {classNameId: CSSClassDeclarationId; modificator: Expression}[];
        style: ObjectLiteral | null;
        props: ObjectLiteral;
    };
}

interface JSXComponent extends ExpressionNode {
    kind: 'JSXComponent';
    params: {
        componentId: ComponentId;
        props: ObjectLiteral;
    };
}

interface JSXFragment extends ExpressionNode {
    kind: 'JSXFragment';
    params: {
        children: Expression[];
    };
}

interface ObjectLiteral extends ExpressionNode {
    kind: 'ObjectLiteral';
    params: {
        props: (ObjectProp | ObjectSpread)[];
    };
}

type ObjectProp = {
    kind: 'ObjectProp';
    name: string;
    propertyId: PropertyId;
    value: Expression;
    loc: Loc;
};

type ObjectSpread = {
    kind: 'ObjectSpread';
    value: Expression;
    loc: Loc;
};

interface ArrayLiteral extends ExpressionNode {
    kind: 'ArrayLiteral';
    params: {
        items: (Expression | ArraySpread)[];
    };
}

type ArraySpread = {
    kind: 'ArraySpread';
    value: Expression;
    loc: Loc;
};

type Scope = {
    id: ScopeId;
    kind: 'Scope';
    parentId: ScopeId | null;
    ownerId: ComponentId | null;
    identifiers: {
        [key: string]: Identifier;
    };
    body: Expression;
};

type IdentifierId = 'IdentifierId';
type Identifier = {
    kind: 'Identifier';
    initializer: Expression;
    doc: Doc | null;
    name: IdentifierId;
    type: Type;
    nameLoc: Loc;
    loc: Loc;
};
