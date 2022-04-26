import type { Direction } from "./Tooltip.extras";
import type { GlobalComponent, ConfirmedClickProps } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QBtnProps, QBtnSlots } from "quasar";

export interface AsyncClick {
  /**
   * Handles click.
   */
  (): Promise<void>;
}

export interface BaseButtonOwnProps extends ConfirmedClickProps {
  readonly asyncClick?: AsyncClick | undefined;
  readonly disable?: booleanU;
  readonly tooltip?: stringU;
  readonly tooltipDirection?: Direction | undefined;
}

export interface BaseButtonParentProps extends Omit<QBtnProps, "disable"> {}

export interface BaseButtonProps
  extends BaseButtonParentProps,
    BaseButtonOwnProps {}

export type BaseButtonSlots = Readonly<QBtnSlots>;

export type GlobalBaseButton = GlobalComponent<
  BaseButtonProps,
  BaseButtonSlots
>;
