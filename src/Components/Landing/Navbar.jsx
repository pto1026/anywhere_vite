export const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <img src="/images/logo.png" alt="Anywhere logo" />
            <nav className="">
                <ul className="flex items-center">
                    <li className="m-[0.5rem]"><a href="#">how it works</a></li>
                    <li className="m-[0.5rem]"><a href="#">use cases</a></li>
                    <li className="m-[0.5rem]"><a href="#">teams</a></li>
                    <li className="m-[0.5rem]"><a href="#">resources</a></li>
                    <li className="m-[0.5rem]"><a href="#">about</a></li>
                </ul>
            </nav>
            <button className="btn-primary ml-auto" aria-label="Book now">Book a Demo</button>
        </div>
    )
}