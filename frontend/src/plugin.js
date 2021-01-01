import React from "react";
import ReactDOM from "react-dom";

import ProcessInstanceCount from "./ProcessInstanceCount";

let container = null;

export default {
  id: "process-instance-count",
  pluginPoint: "cockpit.dashboard",
  render: (node, { api }) => {
    container = node;
    ReactDOM.render(<ProcessInstanceCount camundaAPI={api} />, container);
  },
  unmount: () => {
    ReactDOM.unmountComponentAtNode(container);
  },

  // make sure we have a higher priority than the default plugin
  priority: 12,
};
