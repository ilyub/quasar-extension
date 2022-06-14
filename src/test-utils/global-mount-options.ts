import { components, extras } from "..";
import { evaluate, o } from "@skylib/functions";
import { computed } from "vue";
import type { WritableRecord } from "@skylib/functions";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

export * as mocks from "./mocks";

/**
 * Creates global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: globalMountOptions.CustomOptions = {}
  // eslint-disable-next-line @skylib/no-mutable-signature -- Ok
): GlobalMountOptions {
  return {
    components: o.fromEntries.exhaustive(
      o.values(components).map(component => [component.name, component])
    ),
    provide: evaluate(() => {
      const {
        BaseButton,
        Form,
        IconPicker,
        LanguagePicker,
        PageLayout,
        Resizer,
        Sortable,
        Switchable,
        Table,
        Tooltip
      } = extras;

      const {
        baseButtonSettings,
        formExpose,
        iconPickerSettings,
        languagePickerSettings,
        pageLayoutSettings,
        resizerSettings,
        sortableSettings,
        switchableSettings,
        tableSettings,
        tooltipSettings
      } = options;

      const provide: WritableRecord<symbol, unknown> = {};

      if (baseButtonSettings)
        o.assign(
          provide,
          BaseButton.testProvideSettings(computed(() => baseButtonSettings))
        );

      if (formExpose) o.assign(provide, Form.testProvideForm(formExpose));

      if (iconPickerSettings)
        o.assign(
          provide,
          IconPicker.testProvideSettings(computed(() => iconPickerSettings))
        );

      if (languagePickerSettings)
        o.assign(
          provide,
          LanguagePicker.testProvideSettings(
            computed(() => languagePickerSettings)
          )
        );

      if (pageLayoutSettings)
        o.assign(
          provide,
          PageLayout.testProvideSettings(computed(() => pageLayoutSettings))
        );

      if (resizerSettings)
        o.assign(
          provide,
          Resizer.testProvideSettings(computed(() => resizerSettings))
        );

      if (sortableSettings)
        o.assign(
          provide,
          Sortable.testProvideSettings(computed(() => sortableSettings))
        );

      if (switchableSettings)
        o.assign(
          provide,
          Switchable.testProvideSettings(computed(() => switchableSettings))
        );

      if (tableSettings)
        o.assign(
          provide,
          Table.testProvideSettings(computed(() => tableSettings))
        );

      if (tooltipSettings)
        o.assign(
          provide,
          Tooltip.testProvideSettings(computed(() => tooltipSettings))
        );

      return provide;
    })
  };
}

export namespace globalMountOptions {
  export interface CustomOptions {
    readonly baseButtonSettings?: extras.BaseButton.Settings;
    readonly formExpose?: extras.Form.ExposeToChildren;
    readonly iconPickerSettings?: extras.IconPicker.Settings;
    readonly languagePickerSettings?: extras.LanguagePicker.Settings;
    readonly pageLayoutSettings?: extras.PageLayout.Settings;
    readonly resizerSettings?: extras.Resizer.Settings;
    readonly sortableSettings?: extras.Sortable.Settings;
    readonly switchableSettings?: extras.Switchable.Settings;
    readonly tableSettings?: extras.Table.Settings;
    readonly tooltipSettings?: extras.Tooltip.Settings;
  }
}
