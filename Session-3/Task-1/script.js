document.getElementById('course-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const totalCourses = document.getElementById('total-courses').value;
    const dynamicInputs = document.getElementById('dynamic-inputs');

    // Clear previous inputs
    dynamicInputs.innerHTML = '';

    for (let i = 0; i < totalCourses; i++) {
        const div = document.createElement('div');
        div.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText = `Course ${i + 1} Name:`;

        const input = document.createElement('input');
        input.type = 'text';
        input.required = true;
        input.name = `course-${i + 1}`;

        const gradeLabel = document.createElement('label');
        gradeLabel.innerText = 'Grade:';

        const gradeInput = document.createElement('input');
        gradeInput.type = 'text';
        gradeInput.required = true;
        gradeInput.name = `grade-${i + 1}`;

        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(gradeLabel);
        div.appendChild(gradeInput);
        dynamicInputs.appendChild(div);
    }

    document.getElementById('calculate-btn').style.display = 'block';
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const formGroups = document.querySelectorAll('#dynamic-inputs .form-group');
    const courses = [];
    formGroups.forEach(group => {
        const courseName = group.querySelector('input[name^="course"]').value;
        const grade = group.querySelector('input[name^="grade"]').value;
        courses.push({ name: courseName, grade: grade });
    });

    calculateCGPA(courses);
});

function calculateCGPA(courses) {
    const gradeWeights = {
        "A": 5.0,
        "B": 4.0,
        "C": 3.0,
        "D": 2.0,
        "E": 1.0,
        "F": 0.0
    };

    let totalCourses = 0;
    let totalWeightedPoints = 0;

    courses.forEach(course => {
        const grade = course.grade.toUpperCase();
        const gradeWeight = gradeWeights[grade];
        if (gradeWeight !== undefined) {
            totalCourses += 1;
            totalWeightedPoints += gradeWeight;
        } else {
            alert(`Grade "${course.grade}" is invalid.`);
            return;
        }
    });

    if (totalCourses === 0) {
        alert('Total courses cannot be zero.');
        return;
    }

    const cgpa = totalWeightedPoints / totalCourses;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
