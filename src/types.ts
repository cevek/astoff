type NonNullableType =
    | NumberType
    | StringType
    | BooleanType
    | ObjectType
    | ArrayType
    | UnionType
    | IntersectionType
    | FunctionType
    | JSXElementType;

type Type = NonNullableType | MaybeType;

interface TypeNode {
    kind: string;
    loc: Loc;
    params: unknown;
    doc: Doc | null;
}

interface NumberType extends TypeNode {
    kind: 'NumberType';
    params: {
        literal: number | null;
    };
}

interface StringType extends TypeNode {
    kind: 'StringType';
    params: {
        literal: string | null;
    };
}

interface BooleanType extends TypeNode {
    kind: 'BooleanType';
    params: {
        literal: boolean | null;
    };
}

interface ObjectType extends TypeNode {
    kind: 'ObjectType';
    params: {
        name: string | null;
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
}
