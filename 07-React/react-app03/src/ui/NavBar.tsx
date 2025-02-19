
interface NavBarProps{
    appTitle:string;
}

const NavBar = ({appTitle}:NavBarProps) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"> {appTitle} </a>
        </div>
    </nav>
);

export default NavBar;