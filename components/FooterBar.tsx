import Container from "./Container";

const FooterBar = () => {
    return ( 
        <div className="w-full bg-zinc-200 mt-8 border-t border-zinc-400">
            <Container>
                <footer className="h-16 w-full font-medium text-zinc-500 flex items-center justify-center">
                    <span>{new Date().getFullYear()} &copy; Todos os direitos reservados</span>
                </footer>
            </Container>
        </div>
     );
}
 
export default FooterBar;