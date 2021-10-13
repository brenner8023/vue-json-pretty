declare const _default: import("vue").DefineComponent<Readonly<{
    data: import("./utils").JSONDataType;
    path: string;
    showLength: boolean;
    showDoubleQuotes: boolean;
    showSelectController: boolean;
    showLine: boolean;
    selectOnClickNode: boolean;
    collapsedOnClickBrackets: boolean;
    pathSelectable: (path: string, content: string) => boolean;
    highlightSelectedNode: boolean;
    deep: number;
    virtual: boolean;
    virtualLines: number;
    itemHeight: number;
    modelValue: string | string[];
} & {
    customValueFormatter?: ((data: string, key: string | undefined, path: string, defaultFormatResult: string) => unknown) | undefined;
    selectableType?: "" | "multiple" | "single" | undefined;
}>, {
    tree: import("vue").Ref<HTMLElement | undefined>;
    state: {
        translateY: number;
        visibleData: {
            id: number;
            content: string;
            level: number;
            path: string;
            key?: string | undefined;
            index?: number | undefined;
            showComma: boolean;
            length: number;
            type: "content" | "objectStart" | "objectEnd" | "objectCollapsed" | "arrayStart" | "arrayEnd" | "arrayCollapsed";
        }[] | null;
        hiddenPaths: {
            [x: string]: 1;
        };
    };
    flatData: import("vue").ComputedRef<import("./components/TreeNode").NodeDataType[]>;
    selectedPaths: import("vue").ComputedRef<(string | string[])[]>;
    onTreeScroll: () => void;
    onSelectedChange: ({ path }: import("./components/TreeNode").NodeDataType) => void;
    onTreeNodeClick: ({ content, path }: import("./components/TreeNode").NodeDataType) => void;
    onBracketsClick: (collapsed: boolean, path: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "patch-action" | "click")[], "change" | "update:modelValue" | "patch-action" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    data?: import("./utils").JSONDataType | undefined;
    path?: string | undefined;
    showLength?: boolean | undefined;
    showDoubleQuotes?: boolean | undefined;
    customValueFormatter?: ((data: string, key: string | undefined, path: string, defaultFormatResult: string) => unknown) | undefined;
    selectableType?: "" | "multiple" | "single" | undefined;
    showSelectController?: boolean | undefined;
    showLine?: boolean | undefined;
    selectOnClickNode?: boolean | undefined;
    collapsedOnClickBrackets?: boolean | undefined;
    pathSelectable?: ((path: string, content: string) => boolean) | undefined;
    highlightSelectedNode?: boolean | undefined;
    deep?: number | undefined;
    virtual?: boolean | undefined;
    virtualLines?: number | undefined;
    itemHeight?: number | undefined;
    modelValue?: string | string[] | undefined;
}>, {}>;
export default _default;