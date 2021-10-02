import { Button } from "./Button";

export const Header = ({ title, onAdd }) => {
    return (
        <header className="Header">
            <h1 className="header_title">{title}</h1>
            <Button name="Add" onClick={onAdd} className="button header_button"/>
        </header>
    );
}