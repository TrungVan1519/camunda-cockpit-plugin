import React, { useState, useEffect } from "react";

import { Table } from "./Table";

function ProcessInstanceCount({ camundaAPI }) {
  const [processInstanceCounts, setProcessInstanceCounts] = useState();

  const cockpitApi = camundaAPI.cockpitApi;
  const engine = camundaAPI.engine;

  useEffect(() => {
    fetch(`${cockpitApi}/plugin/sample-plugin/${engine}/process-instance`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        setProcessInstanceCounts(await res.json());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!processInstanceCounts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Process Instances per Definition</h1>

      <Table
        head={
          <>
            <Table.Head key="processDefinitionKey">Key</Table.Head>
            <Table.Head key="instancesCount">Instances</Table.Head>
          </>
        }
      >
        {processInstanceCounts.map((processDefinition) => {
          return (
            <Table.Row key={processDefinition.key}>
              <Table.Cell key="processDefinitionKey">
                {processDefinition.key}
              </Table.Cell>
              <Table.Cell key="instancesCount">
                {processDefinition.instanceCount}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table>
    </>
  );
}

export default ProcessInstanceCount;
