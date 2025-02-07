
interface HeaderProps {
    appTitle:string;
}

const Header = (props:HeaderProps) => (
    <header className="headerStyle">
        <h4>{props.appTitle}</h4>
    </header>
);

export default Header;