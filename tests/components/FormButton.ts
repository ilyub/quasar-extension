import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("formButton", () => {
  const wrapper = vueTestUtils.mount(components.FormButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-form-button");
});
