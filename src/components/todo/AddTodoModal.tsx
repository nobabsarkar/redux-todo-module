import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
    };

    dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold cursor-pointer">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="task">Task</Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                name="text-right"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                name="text-right"
              />
            </div>
          </div>

          <div className="flex justify-end mt-5 ">
            <DialogClose asChild>
              <Button className="cursor-pointer" type="submit">
                Save changes
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
