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
            size={30}
            className="cursor-pointer hover:opacity-75 transition duration-200"
          />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col gap-2">
          <LinkButtonClose hrefButton="/" nameCategorie="Home"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Aventura"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Ação"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Romance"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Drama"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Ficção"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Nacional"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Classicos"/>
            <LinkButtonClose hrefButton="/teste" nameCategorie="Novos"/>
          </ul>
          <div className="mt-14">settings...</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ButtonCategories;
