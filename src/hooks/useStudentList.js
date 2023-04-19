
const maxStudentListSize = 100;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function useStudentList() {
    const studentList = [];
    for (let i = 1; i <= maxStudentListSize; i++) {
        const calculusScore = getRandomInt(0, 100);
        const progScore = getRandomInt(0, 100);
        const engScore = getRandomInt(0, 100);
        const linearScore = getRandomInt(0, 100);
        const discreteScore = getRandomInt(0, 100);
        const avgScore = Math.floor((calculusScore + progScore + engScore + linearScore + discreteScore) / 5.0);
        studentList.push({
            id: i,
            name: `User ${i}`,
            calculusScore: calculusScore,
            progScore: progScore,
            engScore: engScore,
            linearScore: linearScore,
            discreteScore: discreteScore,
            avgScore: avgScore
        });
    }

    return studentList;
}

export default useStudentList;