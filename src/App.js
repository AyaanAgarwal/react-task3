import ColorPicker from "./components/ColorPicker";

export default function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "yellow",
    "black",
    "pink",
    "purple",
    "gray",
    "brown",
    "cyan",
    "lightgreen",
    "lightblue",
    "violet",
    "navy",
    "aqua",
    "teal",
    "lime",
    "beige",
    "	aquamarine  ",
    "coral",
    "chocolate"
  ];
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

