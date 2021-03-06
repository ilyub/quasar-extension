import type { GlobalComponent } from "./api";
import type { IconButton } from "./IconButton.extras";
import type { LocaleName } from "@skylib/functions";
import { computed } from "vue";
import { fn } from "@skylib/functions";
import { injectableSettings } from "./api";
import type { lang } from "@skylib/facades";

export namespace LanguagePicker {
  export const defaultSettings = computed(
    (): Settings => ({ changeLanguageAction: fn.noop, options: [] })
  );

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(defaultSettings);

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: IconButton.Global;
  }

  export interface Option {
    readonly caption: lang.Key;
    readonly flag: string;
    readonly lang: LocaleName;
  }

  export type Options = readonly Option[];

  export interface OwnProps {
    readonly language: LocaleName;
  }

  export interface ParentProps extends IconButton.Props {}

  export interface ParentSlots extends IconButton.Slots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    /**
     * Change language action.
     *
     * @param language - Language.
     */
    readonly changeLanguageAction: (language: LocaleName) => void;
    readonly options: Options;
  }

  export interface Slots extends ParentSlots {}
}
