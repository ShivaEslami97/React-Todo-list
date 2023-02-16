import Heading from "./components/Heading/Heading";
import Tasks from "./components/Tasks/Tasks";
import ToDo from "./components/ToDo/ToDo";
import { DUMMY_TASKS } from "./data";

const App = () => {
  return (
    <div className="container">
      <ToDo>
        <Heading />
        <Tasks items={DUMMY_TASKS} />
      </ToDo>
    </div>
  );
};

export default App;
