type Todolist = Array<Todo>;

type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export type { Todolist, Todo };
