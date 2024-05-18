import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <Container>
            <div className="w-full h-[50vh] flex items-center justify-center flex-col">
                <Image
                    src={"/gif-notfound.gif"}
                    width={250}
                    height={0}
                    alt="gif"
                    className="h-auto"
                />
                <Link href={"/"} className="text-white font-semibold hover:text-zinc-400 transition duration-200 text-center">
                    Página não encontrada, retorne a página inicial.
                </Link>
            </div>
        </Container>
     );
}
 
export default NotFound;