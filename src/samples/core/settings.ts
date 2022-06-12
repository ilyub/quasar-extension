import { extras } from "../..";
import { lang } from "@skylib/facades";
import { implementations } from "@skylib/framework";
// eslint-disable-next-line import/no-duplicates -- Ok
import enGB from "date-fns/locale/en-GB";
// eslint-disable-next-line import/no-duplicates -- Ok
import enUS from "date-fns/locale/en-US";
// eslint-disable-next-line @skylib/consistent-import, import/no-duplicates -- Ok
import ruRu from "date-fns/locale/ru";
import gb from "flag-icon-css/flags/1x1/gb.svg";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { ref } from "vue";
import type { LocaleName, Writable } from "@skylib/functions";

export const settings = {
  baseButtonAnimateAsyncClick: ref(true),
  baseButtonAnimateSubmitting: ref(true),
  iconPickerCompact: ref(false),
  iconPickerTooltips: ref(false),
  language: ref<LocaleName>("en-US"),
  pageLayoutCloseButton: ref(true),
  provide: () => {
    extras.BaseButton.provideSettings(() => {
      return {
        animateAsyncClick: settings.baseButtonAnimateAsyncClick.value,
        animateSubmitting: settings.baseButtonAnimateSubmitting.value
      };
    });

    extras.IconPicker.provideSettings(() => {
      return {
        cols: settings.iconPickerCompact.value ? 5 : 7,
        iconTooltips: settings.iconPickerTooltips.value,
        rows: settings.iconPickerCompact.value ? 3 : 5,
        spinnerSize: settings.iconPickerCompact.value ? "30px" : "70px"
      };
    });

    extras.LanguagePicker.provideSettings(() => {
      return {
        changeLanguageAction: (value): void => {
          const config: Writable<implementations.datetime.dateFnsWrapper.Configuration> =
            {
              firstDayOfWeek: 0,
              locale: enUS,
              pm: true
            };

          switch (value) {
            case "en-GB":
              config.locale = enGB;

              break;

            case "en-US":
              break;

            case "ru-RU":
              config.firstDayOfWeek = 1;
              config.locale = ruRu;
              config.pm = false;
          }

          settings.language.value = value;
          implementations.datetime.dateFnsWrapper.configure(config);
          implementations.lang.dictionary.configure({ localeName: value });
        },
        options: [
          {
            caption: lang.keys.EnglishUSA,
            flag: us,
            lang: "en-US"
          },
          {
            caption: lang.keys.EnglishUK,
            flag: gb,
            lang: "en-GB"
          },
          {
            caption: lang.keys.Russian,
            flag: ru,
            lang: "ru-RU"
          }
        ]
      };
    });

    extras.PageLayout.provideSettings(() => {
      return {
        closeButton: settings.pageLayoutCloseButton.value,
        height: "calc(100vh - 48px)"
      };
    });

    extras.Resizer.provideSettings(() => {
      return { disable: settings.resizerDisable.value };
    });

    extras.Sortable.provideSettings(() => {
      return {
        animationDuration: 500,
        disableDropping: false,
        disableSorting: false
      };
    });

    extras.Switchable.provideSettings(() => {
      return {
        transition: settings.switchableTransition.value,
        transitionDuration: 500
      };
    });

    extras.Table.provideSettings(() => {
      return {
        binaryStateSort: true,
        flat: true,
        growPageBy: 10,
        headerSeparator: true,
        square: true
      };
    });

    extras.Tooltip.provideSettings(() => {
      return {
        delay: settings.tooltipDelay.value,
        show: settings.tooltipShow.value
      };
    });
  },
  resizerDisable: ref(false),
  switchableTransition: ref<extras.Switchable.Transition>("none"),
  tooltipDelay: ref(1000),
  tooltipShow: ref(true)
} as const;
