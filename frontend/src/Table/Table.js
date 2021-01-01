import React from "react";

import "./Table.scss";

export default function Table({ head, children }) {
  return (
    <table className="Table">
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

Table.Head = function Head({ children }) {
  return <th className="TableHead">{children}</th>;
};

Table.Row = function Row({ children }) {
  return <tr className="TableRow">{children}</tr>;
};

Table.Cell = function Cell({ children }) {
  return <td className="TableCell">{children}</td>;
};
