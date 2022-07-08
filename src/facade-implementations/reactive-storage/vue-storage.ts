import { as, defineFn } from "@skylib/functions";
import { computed, reactive, watch } from "vue";
import type { WatchStopHandle } from "vue";
import type { reactiveStorage } from "@skylib/facades";

declare global {
  namespace facades {
    namespace reactiveStorage {
      interface Observer {
        readonly watchStopHandle?: WatchStopHandle;
      }
    }
  }
}

export const vueStorage: reactiveStorage.Facade = defineFn(
  <T extends object>(obj: T): T => reactive(obj) as T,
  {
    unwatch: (_obj: object, observer: reactiveStorage.Observer): void => {
      as.not.empty(observer.watchStopHandle)();
    },
    watch: <T extends object>(
      obj: T,
      handler: reactiveStorage.Handler<T>,
      reducer?: reactiveStorage.Reducer<T>
    ): reactiveStorage.Observer => {
      const reduced = reducer ? computed(() => reducer(obj)) : obj;

      return {
        _type: "ReactiveStorageObserver",
        watchStopHandle: watch(reduced, () => {
          handler(obj);
        })
      };
    }
  }
);
