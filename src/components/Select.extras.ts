import type {
  GlobalComponentConstructor,
  QSelectProps,
  QSelectSlots
} from "quasar";

import * as is from "@skylib/functions/es/guards";

export type GlobalSelect<T = unknown> = GlobalComponentConstructor<
  SelectProps<T>,
  SelectSlots
>;

export interface SelectOption<T = unknown> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type SelectOptions<T = unknown> = ReadonlyArray<SelectOption<T>>;

export interface SelectParentProps
  extends Omit<QSelectProps, "modelValue" | "options"> {}

export interface SelectOwnProps<T = unknown> {
  readonly modelValue: T;
  readonly options: SelectOptions<T>;
}

export interface SelectProps<T = unknown>
  extends SelectParentProps,
    SelectOwnProps<T> {}

export type SelectSlots = QSelectSlots;

export const isSelectOption: is.Guard<SelectOption> = is.factory(
  is.object.of,
  { label: is.string, value: is.unknown },
  { disable: is.boolean }
);

export const isSelectOptions = is.factory(is.array.of, isSelectOption);
