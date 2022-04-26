import { createInjectable } from "./api";
import { is, createValidationObject } from "@skylib/functions";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU } from "@skylib/functions";

export const TransitionVO = createValidationObject<Transition>({
  none: "none",
  slide: "slide"
});

export const isTransition = is.factory(is.enumeration, TransitionVO);

export const {
  inject: injectDisable,
  provide: provideDisable,
  test: testDisable
} = createInjectable<boolean>(() => false);

export const {
  inject: injectSwitchableSettings,
  provide: provideSwitchableSettings,
  test: testSwitchableSettings
} = createInjectable<SwitchableSettings>(() => {
  return { transition: "none", transitionDuration: 200 };
});

export type GlobalSwitchable = GlobalComponent<
  SwitchableProps,
  SwitchableSlots
>;

export interface SwitchableProps {
  readonly disable?: booleanU;
  readonly indent?: booleanU;
}

export interface SwitchableSettings {
  readonly transition: Transition;
  readonly transitionDuration: number;
}

export interface SwitchableSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => VNodes;
}

export type Transition = "none" | "slide";
