import { nanoid } from "nanoid";
import Heading from "./components/Heading/Heading";
import Tasks from "./components/Tasks/Tasks";
import ToDo from "./components/ToDo/ToDo";

const DUMMY_TASKS = [
  { id: nanoid(), task: "HTML I", date: "Today", done: true, isEditing: false },
  {
    id: nanoid(),
    task: "CSS",
    date: "Tomorrow",
    done: false,
    isEditing: false,
  },
  {
    id: nanoid(),
    task: "Responsive design",
    date: "Today",
    done: true,
    isEditing: false,
  },
  { id: nanoid(), task: "Git", date: "Today", done: true, isEditing: false },
  {
    id: nanoid(),
    task: "JavaScript I",
    date: "Tomorrow",
    done: true,
    isEditing: false,
  },
  {
    id: nanoid(),
    task: "JavaScript II",
    date: "Today",
    done: false,
    isEditing: false,
  },
];
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
