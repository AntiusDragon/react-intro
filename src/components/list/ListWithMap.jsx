import { ListItem } from "./ListItem";

export function ListWithMap() {
    const dictionary = ['labas', 'rytas', 'Lietuva', 'labas'];

    return (
        <ul>
            {
                dictionary.map((word, idx) => <ListItem key={idx + '_' + word} text={word} />)
            }
        </ul>
    );
}