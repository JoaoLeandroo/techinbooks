import { loadApiGoogleBooks } from "@/app/api/service";
import CardInfosBooks from "@/components/CardInfosBooks";
import Container from "@/components/Container";

const DesignePage = async () => {
    const data = await loadApiGoogleBooks("UI/UX designer", 40)
    const adventureBooks = data.items 


  return (
    <Container>
      <div className="w-full flex flex-col relative">
        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-white capitalize">
              Livros sobre UI/UX designer
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mb-2 items-center place-items-center gap-3 overflow-y-hidden">
          {adventureBooks.map((todo:any) => (
            <CardInfosBooks
              key={todo.id}
              altBook={todo.volumeInfo.title}
              titleBook={todo.volumeInfo.title.length > 20 ? `${todo.volumeInfo.title.substring(0, 20)}...` : todo.volumeInfo.title}
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
};

export default DesignePage;
