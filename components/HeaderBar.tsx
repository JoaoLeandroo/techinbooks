import { AlignJustify, Search } from "lucide-react";
import Container from "./Container";
import { Input } from "@/components/ui/input"

const HeaderBar = () => {
    return ( 
        <div className="border-b border-zinc-400 bg-zinc-200 shadow-lg">
            <Container>
                <header className="h-16 w-full flex justify-between items-center">
                    <div>
                        <AlignJustify size={30} className="cursor-pointer hover:opacity-75 transition duration-200"/>
                    </div>
                    <div>
                        <div className="relative">
                            <Input className="md:w-[600px] sm:w-[450px] w-[300px] bg-slate-300" placeholder="Digite aqui o nome do livro desejado!"/>
                            <Search size={20} className="absolute top-2 right-2"/>
                        </div>
                    </div>
                    <div>
                        user
                    </div>
                </header>
            </Container>
        </div>
     );
}
 
export default HeaderBar;