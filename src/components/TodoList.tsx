import { List } from "@chakra-ui/react";

import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

import { Todolist } from "types/index.t";

type Props = {
  title: string;
  as: string;
  fontSize: any;
  todoList: Todolist;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
};

export const TodoList = ({
  title,
  as,
  fontSize,
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}: Props) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};
