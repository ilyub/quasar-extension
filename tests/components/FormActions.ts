import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("FormActions", () => {
  const wrapper = vueTestUtils.mount(components.FormActions, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-form-actions");
});
