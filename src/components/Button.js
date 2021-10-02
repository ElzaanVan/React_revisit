export const Button = ({ name, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>{name}</button>
    );
}