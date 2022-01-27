import type { Directive } from "vue";
import { computed } from "vue";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type * as testUtils from "@skylib/functions/es/testUtils";
import type { numberU } from "@skylib/functions/es/types/core";

// eslint-disable-next-line import/no-unassigned-import
import "../components";
import { injectPageOffset } from "../components/api/injections";
import type { IconPickerSettings } from "../components/IconPicker.extras";
import { injectIconPickerSettings } from "../components/IconPicker.extras";
import type { LanguagePickerSettings } from "../components/LanguagePicker.extras";
import { injectLanguagePickerSettings } from "../components/LanguagePicker.extras";
import type { PageLayoutSettings } from "../components/PageLayout.extras";
import { injectPageLayoutSettings } from "../components/PageLayout.extras";
import type { PageTableSettings } from "../components/PageTable.extras";
import { injectPageTableSettings } from "../components/PageTable.extras";
import type { SortableSettings } from "../components/Sortable.extras";
import { injectSortableSettings } from "../components/Sortable.extras";
import type { TooltipSettings } from "../components/Tooltip.extras";
import { injectTooltipSettings } from "../components/Tooltip.extras";
import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";

declare global {
  namespace jest {
    // eslint-disable-next-line @skylib/prefer-readonly
    interface Matchers<R> {
      /**
       * Checks that Vue wrapper contains expected HTML code.
       *
       * @param expected - Expected HTML code.
       * @returns Result object.
       */
      readonly htmlToEqual: (expected: string) => R;
      /**
       * Checks that Vue wrapper contains expected text.
       *
       * @param expected - Expected text.
       * @returns Result object.
       */
      readonly textToEqual: (expected: string) => R;
      /**
       * Checks that Vue wrapper is visible.
       *
       * @returns Result object.
       */
      readonly toBeVisible: () => R;
      /**
       * Checks that Vue wrapper exists.
       *
       * @returns Result object.
       */
      readonly toExist: () => R;
      /**
       * Checks that Vue wrapper has class.
       *
       * @param expected - Expected class name.
       * @returns Result object.
       */
      readonly toHaveClass: (expected: string) => R;
    }
  }
}

export interface CustomGlobalMountOptions {
  readonly iconPickerSettings?: IconPickerSettings;
  readonly languagePickerSettings?: LanguagePickerSettings;
  readonly pageLayoutSettings?: PageLayoutSettings;
  readonly pageOffset?: numberU;
  readonly pageTableSettings?: PageTableSettings;
  readonly sortableSettings?: SortableSettings;
  readonly tooltipSettings?: TooltipSettings;
}

export interface TouchPanMock {
  readonly touchPan: Directive;
  /**
   * Triggers v-touch-pan directive.
   *
   * @param args - Arguments.
   */
  readonly triggerTouchPan: (...args: unknown[]) => void;
}

/**
 * Returns global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: CustomGlobalMountOptions = {}
  // eslint-disable-next-line @skylib/no-mutable-signature
): GlobalMountOptions {
  const provide: Record<symbol, unknown> = {};

  if ("iconPickerSettings" in options) {
    const iconPickerSettings = options.iconPickerSettings;

    provide[injectIconPickerSettings as symbol] = computed<IconPickerSettings>(
      () => iconPickerSettings
    );
  }

  if ("languagePickerSettings" in options) {
    const languagePickerSettings = options.languagePickerSettings;

    provide[injectLanguagePickerSettings as symbol] =
      computed<LanguagePickerSettings>(() => languagePickerSettings);
  }

  if ("pageLayoutSettings" in options) {
    const pageLayoutSettings = options.pageLayoutSettings;

    provide[injectPageLayoutSettings as symbol] = computed<PageLayoutSettings>(
      () => pageLayoutSettings
    );
  }

  if ("pageOffset" in options) {
    const pageOffset = options.pageOffset;

    provide[injectPageOffset as symbol] = computed<numberU>(() => pageOffset);
  }

  if ("pageTableSettings" in options) {
    const pageTableSettings = options.pageTableSettings;

    provide[injectPageTableSettings as symbol] = computed<PageTableSettings>(
      () => pageTableSettings
    );
  }

  if ("sortableSettings" in options) {
    const sortableSettings = options.sortableSettings;

    provide[injectSortableSettings as symbol] = computed<SortableSettings>(
      () => sortableSettings
    );
  }

  if ("tooltipSettings" in options) {
    const tooltipSettings = options.tooltipSettings;

    provide[injectTooltipSettings as symbol] = computed<TooltipSettings>(
      () => tooltipSettings
    );
  }

  return { provide };
}

/**
 * Checks that Vue wrapper contains expected HTML code.
 *
 * @param got - Got value.
 * @param expected - Expected HTML code.
 * @returns Result object.
 */
export function htmlToEqual(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
  const isHtml: is.Guard<() => string> = is.callable;

  assert.object.of(got, { html: isHtml }, {});

  return got.html() === expected
    ? {
        message: (): string => `Expected HTML code not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected HTML code to be "${expected}", got "${got.html()}"`,
        pass: false
      };
}

/**
 * Jest reset.
 */
export function jestReset(): void {
  reactiveStorage.setImplementation(vueStorage.implementation);
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  {
    interface ExpectExtendMap {
      readonly htmlToEqual: testUtils.ExpectFromMatcher<"htmlToEqual">;
      readonly textToEqual: testUtils.ExpectFromMatcher<"textToEqual">;
      readonly toBeVisible: testUtils.ExpectFromMatcher<"toExist">;
      readonly toExist: testUtils.ExpectFromMatcher<"toExist">;
      readonly toHaveClass: testUtils.ExpectFromMatcher<"toHaveClass">;
    }

    const expectExtend: ExpectExtendMap = {
      htmlToEqual,
      textToEqual,
      toBeVisible,
      toExist,
      toHaveClass
    };

    expect.extend(expectExtend as jest.ExpectExtendMap & ExpectExtendMap);
  }

  installQuasarPlugin();
  jestReset();
}

/**
 * Mocks v-touch-pan directive.
 *
 * @returns Mock.
 */
export function mockTouchPan(): TouchPanMock {
  function triggerTouchPan(...args: unknown[]): void {
    assert.callable(touchPanValue);
    touchPanValue(...args);
  }

  let touchPanValue: unknown = undefined;

  const touchPan: Directive = {
    created(_el, binding) {
      touchPanValue = binding.value;
    }
  };

  return { touchPan, triggerTouchPan };
}

/**
 * Checks that Vue wrapper contains expected text.
 *
 * @param got - Got value.
 * @param expected - Expected text.
 * @returns Result object.
 */
export function textToEqual(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
  const isText: is.Guard<() => string> = is.callable;

  assert.object.of(got, { text: isText }, {});

  return got.text() === expected
    ? {
        message: (): string => `Expected text not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected text to be "${expected}", got "${got.text()}"`,
        pass: false
      };
}

/**
 * Checks that Vue wrapper is visible.
 *
 * @param got - Got value.
 * @returns Result object.
 */
export function toBeVisible(got: unknown): testUtils.ExpectReturnType {
  const isIsVisible: is.Guard<() => boolean> = is.callable;

  assert.object.of(got, { isVisible: isIsVisible }, {});

  return got.isVisible()
    ? {
        message: (): string => "Expected Vue wrapper not to be visible",
        pass: true
      }
    : {
        message: (): string => "Expected Vue wrapper to be visible",
        pass: false
      };
}

/**
 * Checks that Vue wrapper exists.
 *
 * @param got - Got value.
 * @returns Result object.
 */
export function toExist(got: unknown): testUtils.ExpectReturnType {
  const isExists: is.Guard<() => boolean> = is.callable;

  assert.object.of(got, { exists: isExists }, {});

  return got.exists()
    ? {
        message: (): string => "Expected Vue wrapper not to exist",
        pass: true
      }
    : {
        message: (): string => "Expected Vue wrapper to exist",
        pass: false
      };
}

/**
 * Checks that Vue wrapper has class.
 *
 * @param got - Got value.
 * @param expected - Expected class name.
 * @returns Result object.
 */
export function toHaveClass(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
  const isClasses: is.Guard<() => string[]> = is.callable;

  assert.object.of(got, { classes: isClasses }, {});

  return got.classes().includes(expected)
    ? {
        message: (): string =>
          `Expected Vue wrapper not to have "${expected}" class`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected Vue wrapper to have "${expected}" class`,
        pass: false
      };
}
