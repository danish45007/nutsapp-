import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import ChatBody from "./ChatBody";

const setUp = (props = {}) => {
  const component = shallow(<ChatBody {...props} />);
  return component;
};

describe("Chat Body Component", () => {
  let component;
  let messages;
  beforeEach(() => {
    component = setUp();
    messages = [
      {
        message: "Test message",
        name: "Message Name",
        timestamp: "12/1/2021",
        received: true,
      },
      {
        message: "Test message1",
        name: "Message Name1",
        timestamp: "12/1/2021",
        received: false,
      },
      {
        message: "Test message2",
        name: "Message Name2",
        timestamp: "12/1/2021",
        received: true,
      },
    ];
  });
  // 1
  it("check for className chat__body", () => {
    const wrapper = component.find(".chat__body");
    expect(wrapper.length).toBe(1);
  });

  // check for the props type
  describe("Checking props types", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        messages,
      };
      const propsError = checkPropTypes(
        ChatBody.prototype,
        expectedProps,
        "props",
        ChatBody.name
      );
      expect(propsError).toBe(undefined);
    });
    it("sportsBallPerson", () => {
      expect(messages[0]).toMatchSnapshot({
        received: expect.any(Boolean),
      });
    });
  });
});
