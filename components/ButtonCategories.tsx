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
    <Link href={hrefButton} className="w-full h-full bg-white hover:bg-slate-300 transition duration-300 font-semibold rounded-lg shadow-xl">
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
        <SheetContent className="bg-cyan-950">
          <ul className="flex flex-col gap-2 mt-5">
          <LinkButtonClose hrefButton="/" nameCategorie="Home"/>
            <LinkButtonClose hrefButton="/categories/javascript" nameCategorie="Javascript"/>
            <LinkButtonClose hrefButton="/categories/java" nameCategorie="Java"/>
            <LinkButtonClose hrefButton="/categories/python" nameCategorie="Python"/>
            <LinkButtonClose hrefButton="/categories/software" nameCategorie="Desenvolvimento de software"/>
            <LinkButtonClose hrefButton="/categories/designer" nameCategorie="UI/UX Designer"/>
            <LinkButtonClose hrefButton="/categories/dados" nameCategorie="Banco de dados"/>
            <LinkButtonClose hrefButton="/categories/logica" nameCategorie="Lógica de Programação"/>
            <LinkButtonClose hrefButton="/categories/outras" nameCategorie="Outros"/>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ButtonCategories;
