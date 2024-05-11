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
          <div className="mb-2 mt-4 bg-zinc-100 hover:scale-110 transition duration-200 w-[200px] h-[290px] p-2 rounded-lg shadow-lg">
            <span className="text-xs font-medium text-zinc-500 mb-2">
              {authorBook}
            </span>
            <div className="w-full flex justify-center">
              <Image
                src={urlBook}
                width={120}
                height={80}
                alt={altBook}
                className="rounded-md mb-1"
              />
            </div>
            <h2 className="text-[14px] font-semibold text-zinc-700">
              {titleBook}
            </h2>
            <p className="text-xs text-zinc-500">{descripBook}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-zinc-300">
          <article className="flex">
            <div>
              <p className="text-xs font-medium">
                Author: <span className="text-zinc-500">{authorBook}</span>
              </p>
              <h2 className="text-base font-medium">{fullInfos[0]}</h2>
              <div className="w-full flex justify-center mb-1">
                <Image
                  src={urlBook}
                  width={120}
                  height={0}
                  alt={altBook}
                  className="object-contain rounded-lg shadow-xl"
                />
              </div>
              <p className="text-xs text-zinc-400">
                {fullInfos[1].length > 250
                  ? `${fullInfos[1].substring(0, 250)}...`
                  : fullInfos[1]}
              </p>
              <Link
                href={buyLink}
                target="_blank"
              >
                <button className="w-full h-11 bg-green-400 mt-2 rounded-md text-white font-semibold hover:opacity-75 transition duration-200 shadow-xl">
                    Compre Aqui
                </button>
              </Link>
            </div>
          </article>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardInfosBooks;
