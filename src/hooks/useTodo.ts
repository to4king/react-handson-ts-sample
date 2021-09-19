import { useState, useEffect } from "react";
import { ulid } from "ulid";
import * as todoData from "../apis/todos";
import { Todolist, Todo } from "../types/index.t";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todolist>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todoList: Todolist) => {
      setTodoList([...todoList].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);

    const newTodoItem: Todo = { ...todoItem!, done: !done };

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );

      setTodoList(newTodoList);
    });
  };

  const addTodolistItem = (todoContent: string) => {
    const newTodoItem = {
      id: ulid(),
      content: todoContent,
      done: false,
    };

    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoList = (id: string) => {
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId
      );

      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodolistItem,
    deleteTodoList,
  };
};
