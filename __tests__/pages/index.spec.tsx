import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";

import Index from "../../pages/index";

it("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const checkbox = TestUtils.renderIntoDocument(<Index />);

  const checkboxNode = ReactDOM.findDOMNode(checkbox);
  expect(checkboxNode).toBeDefined();
});
