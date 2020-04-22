import React from "react";

export default function Pet({ name, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, breed),
  ]);
}
