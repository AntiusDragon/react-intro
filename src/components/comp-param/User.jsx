export function User(props) {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        border: '1px solid #ccc',
    };

    return (
        <div style={style}>
            <h3>{props.name}</h3>
            <p>{props.age
            }</p>
        </div>
    );
}