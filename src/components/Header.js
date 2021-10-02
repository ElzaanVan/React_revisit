import { Button } from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="Header">
            <h1 className="header_title">{title}</h1>
            <Button name={showAdd ? "Close" : "Add"} onClick={onAdd} className={`button header_button ${showAdd ? 'close' : ''}`} />
        </header>
    );
}