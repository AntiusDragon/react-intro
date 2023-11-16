export function Student({name, age}) {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        border: '1px solid #ccc',
    };

    return (
        <div style={style}>
            <h3>{name}</h3>
            <p>{age}</p>
        </div>
    );
}