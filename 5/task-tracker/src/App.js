import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  let tasks = [
    {
        id: 1,
        title: 'do the dishes',
        date: 'Nov 1st',
        toggle: false
    },
    {
        id: 2,
        title: 'finish homework',
        date: 'Nov 3rd',
        toggle: true
    },
    {
        id: 3,
        title: 'clean room',
        date: 'Nov 6th',
        toggle: false
    }
  ]
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
