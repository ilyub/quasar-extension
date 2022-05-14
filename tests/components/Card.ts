import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test("Card", () => {
  const wrapper = vueTestUtils.mount(components.Card, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-card");
});
