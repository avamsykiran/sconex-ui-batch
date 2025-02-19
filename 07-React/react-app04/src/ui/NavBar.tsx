
const NavBar = ({appTitle}:{appTitle:string}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"> {appTitle} </a>
        </div>
    </nav>
);

export default NavBar;