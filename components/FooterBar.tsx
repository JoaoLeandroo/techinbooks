import Container from "./Container";

const FooterBar = () => {
    return ( 
        <div className="w-full bg-zinc-200/20 mt-11 border-t border-white    ">
            <Container>
                <footer className="h-16 w-full font-semibold text-white flex items-center justify-center">
                    <span>{new Date().getFullYear()} &copy; Todos os direitos reservados</span>
                </footer>
            </Container>
        </div>
     );
}
 
export default FooterBar;