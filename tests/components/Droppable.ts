import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";

test("Droppable", () => {
  const wrapper = vueTestUtils.mount(components.Droppable, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper).toHaveClass("m-droppable");
});
