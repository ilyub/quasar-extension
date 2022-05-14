import { injectableSettings } from "./api";
import { icons as baseIcons } from "@skylib/facades";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU, stringU } from "@skylib/functions";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends PageLayout.Icon {}
    }
  }
}

export namespace PageLayout {
  export const defaultSettings: Settings = {
    closeButton: true,
    height: "auto"
  };

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface Icon {
    readonly close: true;
  }

  export interface OwnProps {
    readonly closeButtonOff?: booleanU;
    readonly closeButtonOn?: booleanU;
    readonly title?: stringU;
  }

  export interface OwnSlots {
    /**
     * Actions slot.
     *
     * @returns Nodes.
     */
    readonly actions: () => VNodes;
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
    /**
     * Fit slot.
     *
     * @returns Nodes.
     */
    readonly fit: () => VNodes;
    /**
     * Footer slot.
     *
     * @returns Nodes.
     */
    readonly footer: () => VNodes;
    /**
     * Header slot.
     *
     * @returns Nodes.
     */
    readonly header: () => VNodes;
    /**
     * Sticky footer slot.
     *
     * @returns Nodes.
     */
    readonly "sticky-footer": () => VNodes;
    /**
     * Sticky header slot.
     *
     * @returns Nodes.
     */
    readonly "sticky-header": () => VNodes;
  }

  export interface Props extends OwnProps {}

  export interface Settings {
    readonly closeButton: boolean;
    readonly height: string;
  }

  export interface Slots extends OwnSlots {}
}
