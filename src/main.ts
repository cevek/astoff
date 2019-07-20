type Loc = {fileId: ResourceId; start: number; end: number};
type Doc = {text: string; loc: Loc};
type ScopeId = 'ScopeId';
type ComponentId = 'ComponentId';
type PropertyId = 'PropertyId';
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
        vars: {[id: string]: CSSVar};
    };
    scopes: {[id: string]: Scope};
    files: {[id: string]: Resource};
    types: {[id: string]: Type};
    components: {[id: string]: ComponentDeclaration};
    functions: {[id: string]: FunctionDeclaration};
    root: JSXComponent | JSXElement;
};

type Calculated = {
    properties: {[id: string]: PropertyType};
};
