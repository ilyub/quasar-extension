import type { Switchable } from "./Switchable.extras";
import type { GlobalComponent } from "./api";

export namespace Section {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface ParentProps extends Switchable.Props {}

  export interface ParentSlots extends Switchable.Slots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
