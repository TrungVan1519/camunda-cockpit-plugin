package org.camunda.bpm.cockpit.plugin.sample.resources;

import java.util.List;
import javax.ws.rs.GET;

import org.camunda.bpm.cockpit.db.QueryParameters;
import org.camunda.bpm.cockpit.plugin.resource.AbstractPluginResource;
import org.camunda.bpm.cockpit.plugin.sample.db.ProcessInstanceCountDto;

public class ProcessInstanceResource extends AbstractPluginResource {

  public ProcessInstanceResource(String engineName) {
    super(engineName);
  }

  @GET
  public List<ProcessInstanceCountDto> getProcessInstanceCounts() {
    QueryParameters<ProcessInstanceCountDto> parameters =
      new QueryParameters<ProcessInstanceCountDto>();
    parameters.disableMaxResultsLimit();
    return getQueryService()
      .executeQuery("cockpit.sample.selectProcessInstanceCountsByProcessDefinition", parameters);
  }
}
