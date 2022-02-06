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

  expect(wrapper.emitted("update:model-value")).toBeUndefined();
  knob.vm.$emit("update:model-value", 75);
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[75]]);
});