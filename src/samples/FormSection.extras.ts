import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends FormSection.Word {}
    }
  }
}

export namespace FormSection {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Reset: true;
    readonly SampleField: true;
    readonly Submit: true;
  }
}
