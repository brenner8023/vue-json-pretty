import { defineComponent, PropType, inject } from 'vue';
import { patchActionKey, NodeData } from './const';
import './patch-action.less';

export default defineComponent({
  name: 'PatchAction',
  props: {
    isShowPatch: {
      type: Boolean,
      default: false,
    },
    nodeData: {
      type: Object as PropType<NodeData>,
      default: () => ({}),
    },
  },
  setup (props) {

    const { patchActionHandler } = inject(patchActionKey) || {};

    const onRemoveClick = () => {
      patchActionHandler?.({
        event: 'patch-remove',
        nodeData: {
          content: props.nodeData.content,
          path: props.nodeData.path,
        },
      });
    };

    const onEditClick = () => {
      patchActionHandler?.({
        event: 'patch-edit',
        nodeData: {
          content: props.nodeData.content,
          path: props.nodeData.path,
        },
      });
    };

    const onAddClick = () => {
      patchActionHandler?.({
        event: 'patch-add',
        nodeData: {
          type: props.nodeData.type,
          content: props.nodeData.content,
          path: props.nodeData.path,
        },
      });
    };

    return {
      onRemoveClick,
      onEditClick,
      onAddClick,
    };
  },
  render () {
    const {
      nodeData: { type },
      onRemoveClick,
      onEditClick,
      onAddClick,
    } = this;

    return (
      <div class="patch-action-wrap" v-show={this.isShowPatch}>
        { type === 'content' &&
          <span>
            <div class="patch-action-svg patch-action__remove-svg" onClick={onRemoveClick}></div>
            <div class="patch-action-svg patch-action__edit-svg" onClick={onEditClick}></div>
          </span>
        }
        {
          ['arrayStart', 'objectStart'].includes(type) &&
          <div class="patch-action-svg patch-action__add-svg" onClick={onAddClick}></div>
        }
      </div>
    );
  }
});
