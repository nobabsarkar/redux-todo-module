"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const TodoFilter = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <>
      {/* <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient text-xl font-semibold cursor-pointer">
              Filter
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="flex items-center space-x-1">
                <input value="top" type="checkbox" />
                <h1>High</h1>
              </div>
              <div className="flex items-center space-x-1">
                <input type="checkbox" />
                <h1>Medium</h1>
              </div>
              <div className="flex items-center space-x-1">
                <input type="checkbox" />
                <h1>Low</h1>
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TodoFilter;
