import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface LinkButtonCloseProps{
  hrefButton: string;
  nameCategorie: string;
}

const LinkButtonClose = ({hrefButton, nameCategorie}: LinkButtonCloseProps) => {
  return (
    <Link href={hrefButton} className="w-full h-full bg-slate-400 hover:bg-slate-600 transition duration-300 font-medium rounded-lg shadow-xl">
      <SheetClose className="w-full h-full p-3">
        <li>{nameCategorie}</li>
      </SheetClose>
    </Link>
  )
}

const ButtonCategories = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify
            size={35}
            className="cursor-pointer hover:opacity-75 transition duration-200 text-white"
          />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col gap-2">
          <LinkButtonClose hrefButton="/" nameCategorie="Home"/>
            <LinkButtonClose hrefButton="/categories/javascript" nameCategorie="Javascript"/>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ButtonCategories;
