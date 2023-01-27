export default function FilmItem(props) {
    const { title } = props.data;

    return (
        <li>
            <div>{ title }</div>
        </li>
    )
}