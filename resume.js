document.addEventListener("DOMContentLoaded", function() {
  // Search for career objective elements
  var careerObjectives = document.querySelectorAll('h4');
  careerObjectives.forEach(function(objective) {
    if (objective.textContent.includes("Career Objective")) {
      console.log("Career Objective:", objective.nextElementSibling.textContent);
    }
  });

  // Search for technical skills list items
  var techSkillsLists = document.querySelectorAll('h4 + ul');
  techSkillsLists.forEach(function(list) {
    console.log("Technical Skills:");
    list.querySelectorAll('li').forEach(function(skill) {
      console.log(skill.textContent);
    });
  });

  // Search for education elements
  var educationElements = document.querySelectorAll('h4');
  educationElements.forEach(function(element) {
    if (element.textContent.includes("Education")) {
      console.log("Education:", element.nextElementSibling.textContent);
    }
  });

  // Search for pre-professional experience elements
  var experienceElements = document.querySelectorAll('h4');
  experienceElements.forEach(function(element) {
    if (element.textContent.includes("Pre-Professional Experience")) {
      console.log("Pre-Professional Experience:", element.nextElementSibling.textContent);
    }
  });

  // Search for trainings attended elements
  var trainingsElements = document.querySelectorAll('h4');
  trainingsElements.forEach(function(element) {
    if (element.textContent.includes("Trainings Attended")) {
      console.log("Trainings Attended:", element.nextElementSibling.textContent);
    }
  });

  // Search for references elements
  var referencesElements = document.querySelectorAll('h4');
  referencesElements.forEach(function(element) {
    if (element.textContent.includes("References")) {
      var referenceText = element.nextElementSibling.textContent;
      referenceText = referenceText.replace("References:", "").trim();
      console.log("References:", referenceText);
    }
  });
});