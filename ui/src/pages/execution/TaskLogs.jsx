import React from "react";
import { useFetch } from "../../utils/query";
import { DataTable, Text, LinearProgress } from "../../components";

export default function TaskLogs({ task }) {
  const { taskId } = task;
  const { data: log, isFetching } = useFetch(`/tasks/${taskId}/log`);

  if (isFetching) {
    return <LinearProgress />;
  }
  return log && log.length > 0 ? (
    <DataTable
      data={log}
      columns={[
        { name: "createdTime", type: "date", label: "Timestamp", width: "180px" },
        { name: "log", label: "Entry", style: "div:first-child { white-space: pre-wrap }" },
      ]}
      title="Task Logs"
    />
  ) : (
    <Text style={{ margin: 15 }} variant="body1">
      No logs available
    </Text>
  );
}
