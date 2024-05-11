import Image from "next/image";
import Container from "@/components/Container";
import { loadApiGoogleBooks } from "./api/service";
import CardInfosBooks from "@/components/CardInfosBooks";

export default async function Home() {

  const data = await loadApiGoogleBooks("Livros recomendados + populares", 12)
  const booksRecomendados = data.items

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

          <div className="grid grid-cols-4 items-center place-items-center gap-2">
          {booksRecomendados.map((todo:any) => (
            <CardInfosBooks
              key={todo.id}
              altBook={todo.volumeInfo.title}
              titleBook={todo.volumeInfo.title.length > 20 ? `${todo.volumeInfo.title.substring(0, 20)}...` : todo.volumeInfo.title}
              descripBook={todo.volumeInfo.description?.length > 35 ? `${todo.volumeInfo.description.substring(0, 35)}...` : `Acesse o card para mais informações...`}
              urlBook={todo.volumeInfo.imageLinks?.smallThumbnail === undefined ? todo.volumeInfo.imageLinks?.thumbnail : todo.volumeInfo.imageLinks?.smallThumbnail}
              authorBook={todo.volumeInfo.authors?.length > 1 ? todo.volumeInfo.authors[0] : todo.volumeInfo.authors}
              fullInfos={[todo.volumeInfo.title, todo.volumeInfo.description]}
              buyLink={todo.saleInfo.buyLink}
            />
          ))}
          </div>          
        </section>

      </div>

    </Container>
  );
}
