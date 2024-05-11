import Image from "next/image";
import Container from "@/components/Container";
import { loadApiGoogleBooks } from "./api/service";

export default async function Home() {

  const data = await loadApiGoogleBooks("Recomendados")
  const data2 = data.items
  console.log(data2)

  return (
    <Container>
      
      <div className="w-full flex flex-col">

        <section className="mt-5">
          <div className="flex w-full items-center justify-center flex-col">
            <figure className="relative shadow-xl">
              <Image
                src={"/mulher-lendo2.jpg"}
                width={1080}
                height={0}
                alt="mulher lendo um livro"
                className="rounded-md"
              />
            <div className="flex md:items-start items-center justify-center px-7 flex-col absolute top-0 w-full h-full">
              <h1 className="text-neutral-200 drop-shadow-lg font-bold md:text-7xl text-5xl">Tech In Books</h1>
              <p className="text-neutral-200 drop-shadow-lg font-semibold text-md">Aqui é o melhor lugar do mundo!</p>
            </div>
            </figure>

          </div>
        </section>

        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-zinc-700 capitalize">Livros recomendados</h1>
          </div>

          <div>
          {data2.map((todo: any) => (
            <div key={todo.id} className="mt-5">
              <span>{todo.volumeInfo.title}</span>
              <hr />
            </div>
          ))}
          </div>
          
        </section>

        <section>
          a definir...
        </section>
      </div>

    </Container>
  );
}
