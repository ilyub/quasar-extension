import * as vueTestUtils from "@vue/test-utils";

import PageLayout from "@/components/PageLayout.vue";
import * as testUtils from "@/testUtils";

it.each([true, false])("PageLayout", async closeButton => {
  const wrapper = vueTestUtils.mount(PageLayout, {
    global: testUtils.globalMountOptions({
      pageLayoutSettings: {
        closeButton,
        headerHeight: "50px",
        paddingX: "10px",
        paddingY: "10px",
        sectionMargin: "10px"
      }
    })
  });

  expect(closeButtonComponent()).not.toExist();
  expect(title()).not.toExist();

  {
    await wrapper.setProps({ title: "Sample title" });
    expect(closeButtonComponent().exists()).toStrictEqual(closeButton);
    expect(title()).textToEqual("Sample title");
  }

  {
    const props = closeButton
      ? { hideCloseButton: true }
      : { closeButton: true };

    await wrapper.setProps(props);
    expect(closeButtonComponent().exists()).toStrictEqual(!closeButton);
    expect(title()).textToEqual("Sample title");
  }

  function closeButtonComponent(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.find(".ref-close-button");
  }

  function title(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.find(".ref-title");
  }
});