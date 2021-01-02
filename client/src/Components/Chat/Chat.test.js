import React from "react";
import { shallow } from "enzyme";
import Chat from "./Chat";
import PropTypes from "prop-types";

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

  //   4
  it("prop test", () => {
    Chat.propTypes = {
      messages: PropTypes.array.isRequired,
    };
    const wrapper = shallow(<Chat messages="tet" />);
    expect(wrapper).toBe(["test", "test1"]);
  });
});
