import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TodoFilter = () => {
  // const [position, setPosition] = useState("bottom");

  return (
    <>
      <Dialog>
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
              {/* <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div> */}
              {/* <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div> */}
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
      </Dialog>
    </>
  );
};

export default TodoFilter;
