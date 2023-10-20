// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//must have a couple license options
function renderLicenseBadge(license) {
  if (license !== "none" ){
    return `![github license](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// return a string that has the link to selected license

if (license !== "none" ){
  return `![github license](https://choosealicense.com/licenses/${license}/)`
}
return ""

//https://choosealicense.com/licenses/mit/
//https://choosealicense.com/licenses/apache-2.0/
//https://choosealicense.com/licenses/mpl-2.0/
//https://choosealicense.com/licenses/unlicense/

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license === "none") {
    return ""
  }
  return `## License 
  
  ${renderLicenseBadge(license)}
  
  This projects is licensed with ${license} 

  license link - ${renderLicenseLink(license)}
  
  `
}
// create a conditional to check if license exists
// call renderlicenseBadge and renderlicenseLink
// use template literal to format license section and call functions
// return template literal
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// create layout of what you markdown readme with template literals
// hint - call renderlicense functions inside this function
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credit)
  * [License](#license)
  * [Badges](#badges)
  * [contributing](#contributing)
  * [Tests](#tests)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## credits

  Tutoring Session: Sam Pai

  Study Group
  

  ${renderLicenseSection(data.license)}

  ## Badges

  ${renderLicenseBadge(data.license)}


  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  &copy 2023; Written by Andy Zurek
`;
}

module.exports = generateMarkdown;
