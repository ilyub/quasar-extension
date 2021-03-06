import type {
  QCardActions,
  QCardActionsProps,
  QCardActionsSlots
} from "quasar";
import type { GlobalComponent } from "./api";

export namespace CardActions {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QCardActions;
  }

  export interface ParentProps extends QCardActionsProps {}

  export interface ParentSlots extends QCardActionsSlots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
