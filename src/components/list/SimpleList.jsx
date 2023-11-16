import { ListItem } from "./ListItem";

export function SimpleList() {
    const dictionary = ['labas', 'rytas', 'Lietuva'];

    return (
        <ul>
            <ListItem text={dictionary[0]} />
            <ListItem text={dictionary[1]} />
            <ListItem text={dictionary[2]} />
        </ul>
    );
}