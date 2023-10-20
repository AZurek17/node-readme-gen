// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none" ){
    return `![github license](https://img.shields.io/badge/License-${license}-blue)`
  }
  return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none" ){
  return `[${license} license](https://opensource.org/license/${license})`
}
return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  return `## License 
  
  This projects is licensed with ${license} 

  license link - ${renderLicenseLink(license)}
  
  `
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

  [Starter code](https://github.com/coding-boot-camp/potential-enigma)

  Tutoring Session: Sam Pai

  Study Group
  

  ${renderLicenseSection(data.license)}

  ## Badges

  ${renderLicenseBadge(data.license)}


  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Contact me on [github](https://github.com/${data.username})
  or further questions, [email me](mailto:${data.email})

  &copy 2023; Written by Andy Zurek
`;
}

module.exports = generateMarkdown;
