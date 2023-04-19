
function StudentCard(props) {
    const student = props.student;

    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.calculusScore}</td>
            <td>{student.progScore}</td>
            <td>{student.engScore}</td>
            <td>{student.linearScore}</td>
            <td>{student.discreteScore}</td>
            <td>{student.avgScore}</td>
            <td>{student.avgScore < 40 ? "Fail" : "Pass"}</td>
        </tr>
    );
}

export default StudentCard;