import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabProps, QTabSlots } from "quasar";

export namespace Tab {
  export interface Global<T extends NumStrU = NumStrU>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface OwnProps<T extends NumStrU = NumStrU> {
    readonly name?: T | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QTabProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QTabSlots, keyof OwnSlots> {}

  export interface Props<T extends NumStrU = NumStrU>
    extends ParentProps,
      OwnProps<T> {}

  export interface Slots extends ParentSlots, OwnSlots {}
}