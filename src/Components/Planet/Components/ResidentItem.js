export default function ResidentItem(props) {
    const { name, height, gender } = props.data;

    return (
        <tr>
            <td>{ name }</td>
            <td>{ height }</td>
            <td>{ gender }</td>
        </tr>
    )
}