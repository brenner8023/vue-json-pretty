import { PropType } from 'vue';
import { JSONFlattenReturnType } from 'src/utils';
import './styles.less';
export interface NodeDataType extends JSONFlattenReturnType {
    id: number;
}
export declare const treeNodePropsPass: {
    showLength: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDoubleQuotes: {
        type: BooleanConstructor;
        default: boolean;
    };
    customValueFormatter: PropType<(data: string, key: NodeDataType['key'], path: string, defaultFormatResult: string) => unknown>;
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
};
declare const _default: import("vue").DefineComponent<{
    node: {
        type: PropType<NodeDataType>;
        required: true;
    };
    collapsed: BooleanConstructor;
    checked: BooleanConstructor;
    onTreeNodeClick: {
        type: PropType<(node: NodeDataType) => void>;
    };
    onBracketsClick: {
        type: PropType<(collapsed: boolean, path: string) => void>;
    };
    onSelectedChange: {
        type: PropType<(node: NodeDataType) => void>;
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
    state: {
        valueClass: string;
        prettyKey: string | undefined;
        isMultiple: boolean;
        selectable: boolean;
    };
    isShowPatch: import("vue").Ref<boolean>;
    togglePatchAction: (flag: boolean) => void;
    defaultFormatter: (data: string) => string;
    customFormatter: (data: string) => unknown;
    onBracketsClickHandler: () => void;
    onCheckedChange: () => void;
    onNodeClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    checked: boolean;
    node: NodeDataType;
    collapsed: boolean;
    showLength: boolean;
    showDoubleQuotes: boolean;
    showSelectController: boolean;
    showLine: boolean;
    selectOnClickNode: boolean;
    collapsedOnClickBrackets: boolean;
    pathSelectable: (path: string, content: string) => boolean;
    highlightSelectedNode: boolean;
} & {
    onTreeNodeClick?: ((node: NodeDataType) => void) | undefined;
    onBracketsClick?: ((collapsed: boolean, path: string) => void) | undefined;
    onSelectedChange?: ((node: NodeDataType) => void) | undefined;
    customValueFormatter?: ((data: string, key: string | undefined, path: string, defaultFormatResult: string) => unknown) | undefined;
    selectableType?: "" | "multiple" | "single" | undefined;
}>, {
    checked: boolean;
    collapsed: boolean;
    showLength: boolean;
    showDoubleQuotes: boolean;
    showSelectController: boolean;
    showLine: boolean;
    selectOnClickNode: boolean;
    collapsedOnClickBrackets: boolean;
    pathSelectable: (path: string, content: string) => boolean;
    highlightSelectedNode: boolean;
}>;
export default _default;