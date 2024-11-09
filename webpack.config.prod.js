document.addEventListener('DOMContentLoaded', function() {
  const educationList = document.getElementById('education-list');
  const experienceList = document.getElementById('experience-list');

  const education = [
    { degree: "Bachelor in Computer Engineering", institution: "Istinye University", duration: "01/08/2023 – CURRENT", website: "https://www.istinye.edu.tr" },
    { degree: "Cadet", institution: "Turkish Airforce Academy", duration: "01/10/2021 – 24/09/2024", website: "https://hho.msu.edu.tr" },
    { degree: "Online Course in Financial Markets", institution: "Yale University", duration: "04/04/2023 – 27/09/2023", website: "https://www.yale.edu" },
    { degree: "Online Course in Introduction to Statistics", institution: "Stanford University", duration: "03/07/2021 – 26/06/2022", website: "https://www.stanford.edu" },
  ];

  const experience = [
    { position: "Founder", company: "YILKI Technology", duration: "01/03/2024 – CURRENT" },
    { position: "IT Department", company: "REMAX", duration: "01/12/2023 – 29/04/2024" },
    { position: "Staff and Aerospace Engineering Team Coordinator", company: "NASA", duration: "01/03/2023 – 01/06/2023" },
  ];

  education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.degree}</strong>, ${item.institution} (${item.duration}) <br> Website: <a href="${item.website}" target="_blank">${item.website}</a>`;
    educationList.appendChild(li);
  });

  experience.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.position}</strong>, ${item.company} (${item.duration})`;
    experienceList.appendChild(li);
  });
});
