import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends FormActions.Word {}
    }
  }
}

export namespace FormActions {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Reset: true;
    readonly SampleField: true;
    readonly Submit: true;
  }
}
