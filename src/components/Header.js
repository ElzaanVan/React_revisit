import { Button } from "./Button";

export const Header = ({title}) => {
    const onClick = () => {
        console.log("Clicked");
    }
    return (
        <header className="Header">
            <h1 className="header_title">{title}</h1>
            <Button name="Add" onClick={onClick} className="button header_button"/>
        </header>
    );
}