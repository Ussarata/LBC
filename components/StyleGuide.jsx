import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Popover, PopoverTrigger } from "./ui/popover";

function StyleGuide() {
  return (
    <>
    <div className="flex flex-col gap-y-4 p-24 ">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad alias ab eveniet ipsa, suscipit reiciendis voluptatibus id quod. Eos unde quis perferendis ut id officiis at repellat ex soluta?</p>
    </div>
    <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href='/'>Link</Link>
        <Button variant='default'>Button 1</Button>
        <Button variant='orange'>Button 1</Button>
        <Button variant='input'>Button 3</Button>
        <Button variant='input' size='sm'>Smaller Button</Button>
        <div>
            <Label htmlFor='firstname'>First Name</Label>
            <Input type='firstname' id='firstname' />
        </div>
        <div>
            <Label htmlFor='lastname'>Last Name</Label>
            <Input type='lastname' id='lastname' />
        </div>
    </div>
    </>
  )
}

export default StyleGuide