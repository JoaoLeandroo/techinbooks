import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CardInfosProps {
  titleBook: string;
  authorBook: string;
  urlBook: string;
  altBook: string;
  descripBook: string;
  fullInfos: string[];
  buyLink: string;
}

// fullInfos: 0/1
// titulo / descrição

const CardInfosBooks = ({
  titleBook,
  authorBook,
  urlBook,
  altBook,
  descripBook,
  fullInfos,
  buyLink,
}: CardInfosProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="mb-2 mt-4 border border-slate-300 bg-neutral-400/20 hover:scale-105 transition duration-200 w-[150px] sm:w-[190px] h-[290px] p-2 rounded-lg shadow-lg">
            <span className="text-xs font-medium text-white mb-2">
              {authorBook}
            </span>
            <div className="w-full flex justify-center">
              <Image
                src={urlBook}
                width={100}
                height={80}
                alt={altBook}
                className="rounded-md mb-1"
              />
            </div>
            <h2 className="text-[14px] font-semibold text-slate-400">
              {titleBook}
            </h2>
            <p className="text-xs text-white">{descripBook}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-gray-900/70">
          <article className="flex">
            <div>
              <p className="text-xs font-medium text-white">
                Author: <span className="text-slate-400">{authorBook}</span>
              </p>
              <h2 className="text-base font-medium text-slate-400">{fullInfos[0]}</h2>
              <div className="w-full flex justify-center mb-1">
                <Image
                  src={urlBook}
                  width={80}
                  height={0}
                  alt={altBook}
                  className="object-contain rounded-lg shadow-xl"
                />
              </div>
              <p className="text-xs text-white">
                {fullInfos[1]?.length > 250
                  ? `${fullInfos[1].substring(0, 250)}...`
                  : fullInfos[1]}
              </p>

              {buyLink != undefined ? (
                <Link
                  href={buyLink != undefined ? buyLink : "/"}
                  target="_blank"
                >
                  <button className="w-full h-11 bg-green-400 mt-2 rounded-md text-white font-semibold hover:opacity-75 transition duration-200 shadow-xl">
                    Compre Aqui
                  </button>
                </Link>
              ) : (
                <p className="bg-red-500 p-2 uppercase text-center font-semibold rounded-lg shadow-xl">
                  Livro Esgotado!
                </p>
              )}
            </div>
          </article>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardInfosBooks;
