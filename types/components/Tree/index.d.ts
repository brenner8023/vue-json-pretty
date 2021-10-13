import { PropType } from 'vue';
import { NodeDataType } from 'src/components/TreeNode';
import { JSONDataType } from 'src/utils';
import './styles.less';
declare type FlatDataType = NodeDataType[];
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<JSONDataType>;
        default: null;
    };
    deep: {
        type: NumberConstructor;
        default: number;
    };
    path: {
        type: StringConstructor;
        default: string;
    };
    virtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualLines: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<string | string[]>;
        default: () => string;
    };
    showLength: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDoubleQuotes: {
        type: BooleanConstructor;
        default: boolean;
    };
    customValueFormatter: PropType<(data: string, key: string | undefined, path: string, defaultFormatResult: string) => unknown>;
    selectableType: PropType<"" | "multiple" | "single">;
    showSelectController: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedOnClickBrackets: {
        type: BooleanConstructor;
        default: boolean;
    };
    pathSelectable: {
        type: PropType<(path: string, content: string) => boolean>;
        default: () => boolean;
    };
    highlightSelectedNode: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
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
    flatData: import("vue").ComputedRef<FlatDataType>;
    selectedPaths: import("vue").ComputedRef<(string | string[])[]>;
    onTreeScroll: () => void;
    onSelectedChange: ({ path }: NodeDataType) => void;
    onTreeNodeClick: ({ content, path }: NodeDataType) => void;
    onBracketsClick: (collapsed: boolean, path: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "patch-action" | "click")[], "change" | "update:modelValue" | "patch-action" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data: JSONDataType;
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
    data: JSONDataType;
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
}>;
export default _default;
