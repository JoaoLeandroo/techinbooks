const Container = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="max-w-[1920px] w-full mx-auto px-4 md:px-14">
            {children}
        </div>
     );
}
 
export default Container;