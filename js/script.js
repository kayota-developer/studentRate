let students = [
    {
        firstname: 'Алексей',
        lastname: 'Курапович',
        grades: [8,3,4],
    },
    {
        firstname: 'Дарья',
        lastname: 'Авраменко',
        grades: [3,2,4],
    },
    {
        firstname: 'Иштван',
        lastname: 'Брежнев',
        grades: [3,3,4],
    },
]

function addStudent(firstname, lastname, grades){
    const exists = students.some(student => student.firstname === firstname && student.lastname === lastname);

    if (exists) {
        console.log(`Ошибка: Студент с именем ${firstname} ${lastname} уже существует.`)
    } else {
        students.push({
            firstname: firstname,
            lastname: lastname,
            grades: grades,
        });
        console.log(`Студент ${firstname} ${lastname} успешно добавлен.`);
    }
}

function deleteStudent(firstname,lastname) {
  const index = students.findIndex(student => student.firstname === firstname && student.lastname === lastname);

  if (index !== -1) {
    students.splice(index,1);
    console.log(`Студент ${firstname} ${lastname} удален.`)
  } else {
    console.log(`Ошибка: студент с именем ${firstname} и фамилией ${lastname} не найден`)
  }
};

function updateGrade(students, firstname, lastname, index, newGrade) {
    let student = students.find(s => s.firstname === firstname && s.lastname === lastname);
  
    if (!student) {
      console.log("Студент с таким именем не найден!");
      return;
    }
  
    if (index < 0 || index >= student.grades.length) {
      console.log("Неверный индекс!");
      return;
    }
  
    student.grades[index] = newGrade;
  
    console.log(`Оценка студента ${firstname} ${lastname} на индексе ${index} обновлена на ${newGrade}.`);
    console.log(students); 
};
  
function calculateAverageGrade(student) {

  if (student.grades && student.grades.length > 0) {
      
      let total = student.grades.reduce((sum, grade) => sum + grade, 0);
 
      return total / student.grades.length;
  } else {
      console.log('У студента нет оценок.');
      return null;
  }
};

function calculateAverageGrade(student) {
  if (student.grades && student.grades.length > 0) {
      let total = student.grades.reduce((sum, grade) => sum + grade, 0);
      return total / student.grades.length;
  }
  return 0;  
}

function filterStudentsByAverage(students, minAverage) {

  const highAchievers = students.filter(student => {
      const average = calculateAverageGrade(student);
      return average >= minAverage;
  });

  highAchievers.forEach(student => {
      const average = calculateAverageGrade(student);
      console.log(`${student.firstname} ${student.lastname} - Средний балл: ${average}`);
  });
}

filterStudentsByAverage(students,4)

/* students.forEach(student => {
  let averageGrade = calculateAverageGrade(student);
  if (averageGrade !== null) {
      console.log(`Средний балл студента ${student.firstname} ${student.lastname}: ${averageGrade}`);
  }
}); */

// students.forEach(student => {
//   Object.entries(student).forEach(([key, value]) => {
//       console.log(`${key}: ${value}`);  // Выведет ключ и значение каждого свойства
//   });
// });

