type NonNullableType =
    | NumberType
    | StringType
    | StringLiteralType
    | BooleanType
    | RegexpType
    | DateType
    | ClassType
    | ObjectType
    | ArrayType
    | StringUnionType
    | UnionType
    | IntersectionType
    | FunctionType
    | JSXElementType
    | JSXComponentType;

type Type = NonNullableType | MaybeType;

interface TypeNode {
    kind: string;
    loc: Loc;
    params: unknown;
    doc: Doc | null;
}

interface NumberType extends TypeNode {
    kind: 'NumberType';
    params: undefined;
}

interface StringType extends TypeNode {
    kind: 'StringType';
    params: undefined;
}

interface StringLiteralType extends TypeNode {
    kind: 'StringLiteralType';
    params: {
        value: string;
    };
}

interface BooleanType extends TypeNode {
    kind: 'BooleanType';
    params: undefined;
}

interface RegexpType extends TypeNode {
    kind: 'RegexpType';
    params: undefined;
}

interface DateType extends TypeNode {
    kind: 'DateType';
    params: undefined;
}

interface ObjectType extends TypeNode {
    kind: 'ObjectType';
    params: {
        name: string | null;
        props: PropertyType[];
    };
}

interface ClassType extends TypeNode {
    kind: 'ObjectType';
    params: {
        name: string;
        props: PropertyType[];
    };
}

interface PropertyType extends TypeNode {
    kind: 'PropertyType';
    params: {
        name: string;
        typeId: TypeId;
        optional: boolean;
        readonly: boolean;
    };
}

interface MaybeType extends TypeNode {
    kind: 'MaybeType';
    params: {
        undefined: boolean;
        null: boolean;
        typeId: TypeId;
    };
}

interface ArrayType extends TypeNode {
    kind: 'ArrayType';
    params: {
        elementTypeId: TypeId;
    };
}

interface StringUnionType extends TypeNode {
    kind: 'StringUnionType';
    params: {
        name: string | null;
        values: string[];
    };
}

interface UnionType extends TypeNode {
    kind: 'UnionType';
    params: {
        name: string | null;
        typeIds: TypeId[];
    };
}

interface IntersectionType extends TypeNode {
    kind: 'IntersectionType';
    params: {
        name: string | null;
        typeIds: TypeId[];
    };
}

interface FunctionType extends TypeNode {
    kind: 'FunctionType';
    params: {
        name: string | null;
        params: ParameterType[];
        returnTypeId: TypeId;
    };
}

type ParameterType = {
    name: string;
    typeId: TypeId;
    optional: boolean;
};

interface JSXElementType extends TypeNode {
    kind: 'JSXElementType';
    params: {
        componentId?: ComponentId;
    };
}

interface JSXComponentType extends JSXElementType {
    params: {
        componentId: ComponentId;
    };
}
