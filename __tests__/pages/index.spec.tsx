import { shallow } from "enzyme";
import * as React from "react";

import Index from "../../pages/index";

it("Index File", () => {
  const index = shallow(<Index />);
  expect(index).toBeDefined();
});
