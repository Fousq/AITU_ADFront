import Table from "react-bootstrap/Table";
import StudentCard from "./StudentCard";
import useStudentList from "../hooks/useStudentList";

const subjects = ["Calculus 1", "Introduction to Programming", "English", "Linear Algebra", "Discrete mathematics"];

function StudentListTable() {
    const studentList = useStudentList();

    return (
        <Table bordered hover responsive>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Student's name</th>
                    {subjects.map(subject => {
                        return (
                            <th>{subject}</th>
                        )
                    })}
                    <th>Average Score</th>
                    <th>Pass/Fail</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map(student => {
                    return (
                        <StudentCard student={student}>
                        </StudentCard>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default StudentListTable;