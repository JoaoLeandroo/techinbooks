"use client"

import Container from "./Container";
import Link from "next/link";
import ButtonCategories from "./ButtonCategories";
import { Input } from "./ui/input";
import { AuthContext } from "@/context/auth";
import { useContext, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation'

const HeaderBar = () => {

  const { setInputValue } = useContext(AuthContext);
  const [inputChange, setInputChange] = useState<any>("")

  const handleClick = () => {
    if(inputChange === "") return 
    setInputValue(inputChange)
    setInputChange("")
  }

  const router = useRouter()
  const keyDownEnter = (e: any) => {
    if (e.key === 'Enter') {
      setInputValue(inputChange)
      setInputChange("")
      router.push("/categories/search")
      return
    }
  }

  return (
    <div className="border-b border-white bg-zinc-200/20 shadow-lg sticky top-0 z-50">
      <Container>
        <header className="h-16 w-full flex justify-between items-center">
          <Link href={"/"} title="Tech Books">
            <h1 className="text-green-500 font-bold text-lg md:text-2xl transition duration-200 hover:opacity-75">
              Tech<span className="text-white">Books</span>
            </h1>
          </Link>

          <div className="relative">
          <Input
              autoFocus
              className="md:w-[500px] sm:w-[400px] w-[190px] bg-slate-300"
              placeholder="Procure aqui..."
              onChange={(e) => setInputChange(e.target.value)}
              onKeyDown={keyDownEnter}
              value={inputChange}
            />
            <Link href={"/categories/search"} onClick={handleClick}><Search className="w-5 h-5 absolute top-2 right-3 hover:scale-105 transition duration-200" /></Link>
          </div>

          <div className="mr-0 xl:mr-24">
            <ButtonCategories />
          </div>
        </header>
      </Container>
    </div>
  );
};

export default HeaderBar;
