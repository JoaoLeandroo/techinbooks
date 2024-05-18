import Image from "next/image";
import Container from "@/components/Container";
import { loadApiGoogleBooks } from "./api/service";
import CardInfosBooks from "@/components/CardInfosBooks";

export default async function Home() {

  const recomendados = await loadApiGoogleBooks("entendo algoritmos", 8)
  const booksRecomendados = recomendados.items

  const software = await loadApiGoogleBooks("Desenvolvimento de softaware", 8)
  const bookSoftware = software.items

  const orientadaObjetos = await loadApiGoogleBooks("Programação Orientada a objetos", 8)
  const booksOrientadaObjetos = orientadaObjetos.items


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
              <h1 className="text-green-500 drop-shadow-lg font-bold md:text-7xl text-4xl select-none">Tech <span className="text-white">Books</span></h1>
              <p className="text-green-500 drop-shadow-lg font-bold text-md rounded-lg select-none bg-white py-1 px-2">Aqui é o melhor lugar do mundo!</p>
            </div>
            </figure>

          </div>
        </section>

        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-white capitalize">Livros recomendados</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mb-2 items-center place-items-center gap-3 overflow-y-hidden">
          {booksRecomendados.map((todo:any) => (
            <CardInfosBooks
              key={todo.id}
              altBook={todo.volumeInfo.title}
              titleBook={todo.volumeInfo.title?.length > 20 ? `${todo.volumeInfo.title.substring(0, 20)}...` : todo.volumeInfo.title}
              descripBook={todo.volumeInfo.description?.length > 35 ? `${todo.volumeInfo.description.substring(0, 35)}...` : `Acesse o card para mais informações...`}
              urlBook={todo.volumeInfo.imageLinks?.smallThumbnail === undefined ? todo.volumeInfo.imageLinks?.thumbnail : todo.volumeInfo.imageLinks?.smallThumbnail}
              authorBook={todo.volumeInfo.authors?.length > 1 ? todo.volumeInfo.authors[0] : todo.volumeInfo.authors}
              fullInfos={[todo.volumeInfo.title, todo.volumeInfo.description]}
              buyLink={todo.saleInfo?.buyLink}
            />
          ))}
          </div>          
        </section>

        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-white capitalize">Desenvolvimento de Software</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mb-2 items-center place-items-center gap-3 overflow-y-hidden">
          {bookSoftware.map((todo:any) => (
            <CardInfosBooks
              key={todo.id}
              altBook={todo.volumeInfo.title}
              titleBook={todo.volumeInfo.title?.length > 20 ? `${todo.volumeInfo.title.substring(0, 20)}...` : todo.volumeInfo.title}
              descripBook={todo.volumeInfo.description?.length > 35 ? `${todo.volumeInfo.description.substring(0, 35)}...` : `Acesse o card para mais informações...`}
              urlBook={todo.volumeInfo.imageLinks?.smallThumbnail === undefined ? todo.volumeInfo.imageLinks?.thumbnail : todo.volumeInfo.imageLinks?.smallThumbnail}
              authorBook={todo.volumeInfo.authors?.length > 1 ? todo.volumeInfo.authors[0] : todo.volumeInfo.authors}
              fullInfos={[todo.volumeInfo.title, todo.volumeInfo.description]}
              buyLink={todo.saleInfo?.buyLink}
            />
          ))}
          </div>          
        </section>

        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-white capitalize">Orientada a Objetos</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mb-2 items-center place-items-center gap-3 overflow-y-hidden">
          {booksOrientadaObjetos.map((todo:any) => (
            <CardInfosBooks
              key={todo.id}
              altBook={todo.volumeInfo.title}
              titleBook={todo.volumeInfo.title?.length > 20 ? `${todo.volumeInfo.title.substring(0, 20)}...` : todo.volumeInfo.title}
              descripBook={todo.volumeInfo.description?.length > 35 ? `${todo.volumeInfo.description.substring(0, 35)}...` : `Acesse o card para mais informações...`}
              urlBook={todo.volumeInfo.imageLinks?.smallThumbnail === undefined ? todo.volumeInfo.imageLinks?.thumbnail : todo.volumeInfo.imageLinks?.smallThumbnail}
              authorBook={todo.volumeInfo.authors?.length > 1 ? todo.volumeInfo.authors[0] : todo.volumeInfo.authors}
              fullInfos={[todo.volumeInfo.title, todo.volumeInfo.description]}
              buyLink={todo.saleInfo?.buyLink}
            />
          ))}
          </div>          
        </section>

      </div>

    </Container>
  );
}
