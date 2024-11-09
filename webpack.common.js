document.addEventListener('DOMContentLoaded', function() {
  const educationList = document.getElementById('education-list');
  const experienceList = document.getElementById('experience-list');

  const education = [
    { degree: "Bachelor in Computer Engineering", institution: "Istinye University", duration: "2023 - Present" },
    { degree: "Cadet", institution: "Turkish Airforce Academy", duration: "2021 - 2024" },
    { degree: "Online Course in Financial Markets", institution: "Yale University", duration: "2023" },
    { degree: "Online Course in Introduction to Statistics", institution: "Stanford University", duration: "2021 - 2022" },
  ];

  const experience = [
    { position: "Founder", company: "YILKI Technology", duration: "2024 - Present" },
    { position: "IT Department", company: "REMAX", duration: "2023 - 2024" },
    { position: "Staff and Aerospace Engineering Team Coordinator", company: "NASA", duration: "2023" },
  ];

  education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.degree}</strong>, ${item.institution} (${item.duration})`;
    educationList.appendChild(li);
  });

  experience.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.position}</strong>, ${item.company} (${item.duration})`;
    experienceList.appendChild(li);
  });
});
