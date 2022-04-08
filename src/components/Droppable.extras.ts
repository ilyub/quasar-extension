import type { VNode } from "vue";

import type { GlobalComponent } from "./api";
import type { SortableProps, SortableSlots } from "./Sortable.extras";

export interface DroppableOwnProps {}

export type DroppableParentProps = Omit<
  SortableProps,
  "group" | "itemKey" | "modelValue"
>;

export interface DroppableProps
  extends DroppableParentProps,
    DroppableOwnProps {}

export interface DroppableSlots extends SortableSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}

export type GlobalDroppable = GlobalComponent<DroppableProps, DroppableSlots>;
