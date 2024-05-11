import Image from "next/image";

interface CardInfosProps{
    titleBook: string;
    authorBook: string;
    urlBook: string;
    altBook: string;
    descripBook: string;
}

const CardInfosBooks = ({titleBook, authorBook, urlBook, altBook, descripBook}: CardInfosProps) => {
    return ( 
        <div className="mb-2 mt-4 bg-zinc-100 hover:scale-110 transition duration-200 w-[200px] h-[290px] p-2 rounded-lg shadow-lg text-center">
        <span className="text-xs font-medium text-zinc-500 mb-2">{authorBook}</span>
        <div className="w-full flex justify-center">
          <Image
            src={urlBook}
            width={120}
            height={80}
            alt={altBook}
            className="rounded-md mb-1"
          />
        </div>
        <h2 className="text-[14px] font-semibold text-zinc-700">{titleBook}</h2>
        <p className="text-xs text-zinc-500">{descripBook}</p>
      </div>
     );
}
 
export default CardInfosBooks;