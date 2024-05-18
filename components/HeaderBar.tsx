import Container from "./Container";
import Link from "next/link";
import ButtonCategories from "./ButtonCategories";


const HeaderBar = () => {


  return (
    <div className="border-b border-white bg-zinc-200/20 shadow-lg sticky top-0 z-50">
      <Container>
        <header className="h-16 w-full flex justify-between items-center">
        <Link href={"/"} title="Tech Books">
            <h1 className="text-green-500 font-bold text-2xl transition duration-200 hover:opacity-75">Tech<span className="text-white">Books</span></h1>
        </Link>

          <div className="mr-1 xl:mr-24">
            <ButtonCategories />
          </div>
        
        </header>
      </Container>
    </div>
  );
};

export default HeaderBar;
