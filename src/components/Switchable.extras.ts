import { injectableSettings } from "./api";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU } from "@skylib/functions";

export namespace Switchable {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = {
    transition: "none",
    transitionDuration: 200
  };

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly indent?: booleanU;
  }

  export interface OwnSlots {
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
  }

  export interface Props extends OwnProps {}

  export interface Settings {
    readonly transition: Transition;
    readonly transitionDuration: number;
  }

  export interface Slots extends OwnSlots {}

  export type Transition = "none" | "slide";
}
