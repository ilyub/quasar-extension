import type { GlobalComponent } from "./api";
import type { Switchable } from "./Switchable.extras";

export namespace PageSection {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: Switchable.Global;
  }

  export interface ParentProps extends Switchable.Props {}

  export interface ParentSlots extends Switchable.Slots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
