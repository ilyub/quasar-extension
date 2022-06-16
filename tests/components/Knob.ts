import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QKnob } from "quasar";

test("Knob", () => {
  const wrapper = vueTestUtils.mount(components.Knob, {
    global: testUtils.globalMountOptions(),
    props: { modelValue: 50 }
  });

  const main = testUtils.findQuasarComponent(wrapper, QKnob);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", 75);
  expect(wrapper).toHaveEmitted("update:modelValue", [75]);
});
