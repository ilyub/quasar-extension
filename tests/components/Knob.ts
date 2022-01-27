import { QKnob } from "quasar";
import * as testUtils from "@vue/test-utils";

import Knob from "@/components/Knob.vue";

it("Knob", () => {
  const wrapper = testUtils.mount(Knob, {
    props: {
      modelValue: 50
    }
  });

  const knob = wrapper.findComponent(QKnob);

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  warnSpy.mockImplementation(warnMock);
  expect(wrapper.emitted("update:model-value")).toBeUndefined();
  knob.vm.$emit("update:model-value", 75);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[75]]);
  expect(warnMock).toBeCalledTimes(1);
  expect(warnMock).toBeCalledWith(
    '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
  );
  warnMock.mockClear();
});
