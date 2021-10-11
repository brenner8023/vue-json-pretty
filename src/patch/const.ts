
import type { InjectionKey } from 'vue';

interface InjectedData {
  patchActionHandler(eventData: Record<string, unknown>): void;
}

type NodeType = 'content' |
  'arrayStart' | 'arrayEnd' |
  'objectStart' | 'objectEnd' |
  'objectCollapsed' | 'arrayCollapsed';

export interface NodeData {
  content: string;
  id: number;
  path: string;
  type: NodeType;
}

export const patchActionKey: InjectionKey<InjectedData> = Symbol('patch-action');
