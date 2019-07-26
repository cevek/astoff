type Loc = {fileId: ResourceId; start: number; end: number};
type Doc = {text: string; loc: Loc};
type ScopeId = 'ScopeId';
type ComponentId = 'ComponentId';
type PropertyId = 'PropertyId';
type MethodId = 'MethodId';
type FunctionId = 'FunctionId';
type TypeId = 'TypeId';
type ResourceId = 'FileId';
type CSSVarId = 'CSSVarId';

type ComponentDeclaration = {
    id: ComponentId;
    kind: 'ComponentDeclaration';
    name: string;
    props: ObjectType;
    scopeId: ScopeId;
    body: Expression | null;
    doc: Doc | null;
};

type FunctionDeclaration = {
    id: FunctionId;
    kind: 'FunctionDeclaration';
    name: string;
    params: Parameter[];
    scopeId: ScopeId;
    typeId: TypeId;
    doc: Doc | null;
};

type Resource = {
    id: ResourceId;
    kind: 'Resource';
    fileName: string;
};

type AST = {
    css: {
        vars: {[P in CSSVarId]: CSSVar};
    };
    scopes: {[P in ScopeId]: Scope};
    files: {[P in ResourceId]: Resource};
    types: {[P in TypeId]: Type};
    components: {[P in ComponentId]: ComponentDeclaration};
    functions: {[P in FunctionId]: FunctionDeclaration};
    root: JSXComponent | JSXElement;
};

type Calculated = {
    properties: {[P in PropertyId]: PropertyType};
};

