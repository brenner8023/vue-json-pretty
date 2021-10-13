import { PropType } from 'vue';
import { NodeData } from './const';
import './patch-action.less';
declare const _default: import("vue").DefineComponent<{
    isShowPatch: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeData: {
        type: PropType<NodeData>;
        default: () => {};
    };
}, {
    onRemoveClick: () => void;
    onEditClick: () => void;
    onAddClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isShowPatch: boolean;
    nodeData: NodeData;
} & {}>, {
    isShowPatch: boolean;
    nodeData: NodeData;
}>;
export default _default;
