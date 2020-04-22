const Pet = ({ name, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      "Adopt Me!",
      React.createElement(Pet, { name: "luna", breed: "havanese" }),
      React.createElement(Pet, { name: "Pepper", breed: "budgie" }),
      React.createElement(Pet, { name: "Benson", breed: "boxer" })
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
