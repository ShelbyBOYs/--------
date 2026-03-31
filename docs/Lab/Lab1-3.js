"use strict";

// Клас для особистої інформації
class PersonalInfo {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// Клас для освіти
class Education {
  constructor(education) {
    this.education = education;
  }
}

// Клас для досвіду
class Experience {
  constructor(experience) {
    this.experience = experience;
  }
}

// Клас для навичок
class Skills {
  constructor(skills) {
    this.skills = skills;
  }
}

// Головний клас резюме
class Resume {
  constructor(personalInfo, education, experience, skills) {
    this.personalInfo = personalInfo;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
  }

  showResume() {
    return `
      <p><strong>Ім'я:</strong> ${this.personalInfo.name}</p>
      <p><strong>Email:</strong> ${this.personalInfo.email}</p>
      <p><strong>Телефон:</strong> ${this.personalInfo.phone}</p>
      <p><strong>Освіта:</strong> ${this.education.education}</p>
      <p><strong>Досвід роботи:</strong> ${this.experience.experience}</p>
      <p><strong>Навички:</strong> ${this.skills.skills}</p>
    `;
  }
}

// Кнопка створення резюме
document.getElementById("createBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let educationValue = document.getElementById("education").value;
  let experienceValue = document.getElementById("experience").value;
  let skillsValue = document.getElementById("skills").value;

  // Проста валідація
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    educationValue === "" ||
    experienceValue === "" ||
    skillsValue === ""
  ) {
    alert("Заповніть усі поля!");
    return;
  }

  let personalInfo = new PersonalInfo(name, email, phone);
  let education = new Education(educationValue);
  let experience = new Experience(experienceValue);
  let skills = new Skills(skillsValue);

  let resume = new Resume(personalInfo, education, experience, skills);

  document.getElementById("resumeOutput").innerHTML = resume.showResume();

  console.log(resume);
  alert("Резюме створено!");
});