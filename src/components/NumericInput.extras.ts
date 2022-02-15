import type {
  GlobalComponentConstructor,
  QInputProps,
  QInputSlots
} from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { numberU } from "@skylib/functions/es/types/core";

import type { ReadonlyOmit } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly chevronLeftCircle: string;
        readonly chevronRightCircle: string;
      }
    }
  }
}

export type GlobalNumericInput = GlobalComponentConstructor<
  NumericInputProps,
  NumericInputSlots
>;

// eslint-disable-next-line @skylib/prefer-readonly
export type NumericInputParentProps = ReadonlyOmit<QInputProps, "modelValue">;

export interface NumericInputOwnProps {
  readonly max: number;
  readonly min?: numberU;
  readonly modelValue?: numberU;
}

export interface NumericInputProps
  extends NumericInputParentProps,
    NumericInputOwnProps {}

export type NumericInputSlots = QInputSlots;

export const icons: Icons<"chevronLeftCircle" | "chevronRightCircle"> =
  baseIcons;
