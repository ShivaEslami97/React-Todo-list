import { nanoid } from "nanoid";

export const DUMMY_TASKS = [
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
