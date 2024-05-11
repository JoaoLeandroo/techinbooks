import { CircleUser, Search } from "lucide-react";
import Container from "./Container";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ButtonCategories from "./ButtonCategories";

const HeaderBar = () => {


  return (
    <div className="border-b border-zinc-400 bg-zinc-200 shadow-lg sticky top-0 z-50">
      <Container>
        <header className="h-16 w-full flex justify-between items-center">
          <div>
            <ButtonCategories />
          </div>

          <div className="relative">
            <Input
              className="md:w-[600px] sm:w-[450px] w-[250px] bg-slate-300"
              placeholder="Procure aqui..."
            />
            <Link href={"/categories"}>
              <Search size={20} className="absolute top-2 right-2 cursor-pointer transition duration-200 hover:scale-110"/>
            </Link>
          </div>

          <div>
            <Link href={"/"}>
              <CircleUser size={30} className="transition duration-200 hover:scale-105 hover:opacity-75"/>
            </Link>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default HeaderBar;
