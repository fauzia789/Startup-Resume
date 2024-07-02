document.addEventListener("DOMContentLoaded", function() {
    // Search for career objective elements
    var careerObjective = document.querySelector('h2:nth-of-type(2) + h4');
    console.log(careerObjective?.textContent);
  
    // Search for technical skills list items
    var techSkills = document.querySelectorAll('h2:nth-of-type(1) + h3 + ul li');
    if (techSkills) {
      techSkills.forEach(function(skill) {
        console.log(skill.textContent);
      });
    } else {
      console.log("Technical skills not found");
    }
  
    // Search for Daniel's career objective element
    var danielCareerObjective = document.querySelector('h2:nth-of-type(3) + h4');
    if (danielCareerObjective) {
      danielCareerObjective.textContent = "Seeking an entry-level position in IT with a focus on hardware and network troubleshooting.";
    } else {
      console.log("Daniel's career objective not found");
    }
  });