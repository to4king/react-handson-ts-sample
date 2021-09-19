import { Textarea, Button } from "@chakra-ui/react";
import { ReactElement } from "react";

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}: {
  placeholder: string;
  leftIcon: ReactElement;
  buttonText: string;
  inputEl: React.RefObject<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
