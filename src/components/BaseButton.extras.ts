import type { GlobalComponentConstructor, QBtnProps, QBtnSlots } from "quasar";

import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import type { Direction } from "./Tooltip.extras";

export type BaseButtonParentProps = QBtnProps;

export interface BaseButtonOwnProps {
  readonly modelValue?: booleanU;
  readonly tooltip?: stringU;
  readonly tooltipDirection?: Direction | undefined;
}

export interface BaseButtonProps
  extends BaseButtonParentProps,
    BaseButtonOwnProps {}

export type BaseButtonSlots = QBtnSlots;

export type GlobalBaseButton = GlobalComponentConstructor<
  BaseButtonProps,
  BaseButtonSlots
>;
