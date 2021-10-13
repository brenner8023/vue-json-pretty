import type { InjectionKey } from 'vue';
interface InjectedData {
    patchActionHandler(eventData: Record<string, unknown>): void;
}
declare type NodeType = 'content' | 'arrayStart' | 'arrayEnd' | 'objectStart' | 'objectEnd' | 'objectCollapsed' | 'arrayCollapsed';
export interface NodeData {
    content: string;
    id: number;
    path: string;
    type: NodeType;
}
export declare const patchActionKey: InjectionKey<InjectedData>;
export {};
