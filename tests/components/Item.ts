import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QIcon } from "quasar";
import { components } from "@";
import { lang } from "@skylib/facades";

test("prop: caption", () => {
  const wrapper = vueTestUtils.mount(components.Item, {
    global: testUtils.globalMountOptions(),
    props: { caption: lang.plain("sample-caption") }
  });

  const { comp } = testUtils.findFactory("item", wrapper);

  expect(comp("caption")).textToEqual("sample-caption");
});

test("prop: icon", () => {
  const wrapper = vueTestUtils.mount(components.Item, {
    global: testUtils.globalMountOptions(),
    props: { icon: "sample-icon" }
  });

  const { comp } = testUtils.findFactory("item", wrapper);

  expect(comp("icon").findComponent(QIcon)).textToEqual("sample-icon");
});
