"use client"
import { CircleUser, Search } from "lucide-react";
import Container from "./Container";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ButtonCategories from "./ButtonCategories";
import { useEffect, useRef, useContext, useState } from "react";
import { UserContext } from "@/context/auth";


const HeaderBar = () => {

  const { inputValue, setInputValue } = useContext<any>(UserContext)
  
  const inputRef = useRef<any>(null)

  const handleClick = () => {
    let x = inputRef?.current.value
    setInputValue(x)
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])
  
  return (
    <div className="border-b border-white bg-zinc-200/20 shadow-lg sticky top-0 z-50">
      <Container>
        <header className="h-16 w-full flex justify-between items-center">
          <div>
            <ButtonCategories />
          </div>

          <div className="relative">
            <Input
              className="md:w-[600px] sm:w-[450px] w-[250px] bg-slate-300"
              placeholder="Procure aqui..."
              ref={inputRef}
            />
            <Link href={"/categories/search"} onClick={handleClick}>
              <Search size={20} className="absolute top-2 right-2 cursor-pointer transition duration-200 hover:scale-110"/>
            </Link>
          </div>

          <div>
            <div>
              <CircleUser size={30} className="transition duration-200 hover:scale-105 hover:opacity-75"/>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default HeaderBar;
