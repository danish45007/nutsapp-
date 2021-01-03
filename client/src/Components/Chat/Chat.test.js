import React from "react";
import { shallow } from "enzyme";
import Chat from "./Chat";
import checkPropTypes from "check-prop-types";

const setUp = (props = {}) => {
  const component = shallow(<Chat {...props} />);
  return component;
};

describe("Chat Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  // 1
  it("check for className chat", () => {
    const wrapper = component.find(".chat");
    expect(wrapper.length).toBe(1);
  });

  //   2
  it("check for Avatar", () => {
    const wrapper = component.find(".Avatar");
    expect(wrapper.length).toBe(1);
  });

  //   3
  it("check for Header info Name", () => {
    const wrapper = component.find("h3").text();
    expect(wrapper).toBe("Aditya");
  });

  // check for the props type
  describe("Checking props types", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        messages: [
          {
            message: "Test message",
            name: "Message Name",
            timestamp: "12/1/2021",
            received: true,
          },
        ],
      };
      const propsError = checkPropTypes(
        Chat.prototype,
        expectedProps,
        "props",
        Chat.name
      );
      expect(propsError).toBe(undefined);
    });
  });
});
