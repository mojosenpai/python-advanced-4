
import ClassText from "./components/ClassText";
import Text from "./components/Text";

function App() {
  let x = "This s a greeting from a variable"
  let y = 2
  y = y + 1
  return (
    <>
    <div>
      <Text name="Farzin" age="24" />
      <Text name="Radin" age="14" />
      <ClassText />
      <p>hello world!</p>
      <p>how are you?</p>
      <p> p says {x}</p>
      <p>The value of y is {y}</p>
      <button onClick={() => {
        y = y + 1
      }}>click!</button>
      <p>{y}</p>
    </div>
    </>
  );
}

export default App;
