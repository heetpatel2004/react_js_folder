import Cards from "./components/Cards";

const App = () => {
  const arr = [
    { user: "John Doe" },
    { user: "king kong" },
    { user: "harry potter" }
  ];

  return (
    <div className="cardContainer">
      {arr.map((ele) => (
        <Cards  user={ele.user} />
      ))}
    </div>
  );
};

export default App;
