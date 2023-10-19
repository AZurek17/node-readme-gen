// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//* return a string that has the link to selected license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //* create a conditional to check if license exists
  //* call renderlicenseBadge and renderlicenseLink
  //* use template literal to format license section and call functions
  //* return template literal
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  return `# ${data.title}
  [visit ${username} @ github](https://github.com/AZurek17)

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

  ##Installation

  ${data.installation}

  ##Usage

  ${data.usage}

  ##credits

  Tutoring Session: Sam Pai
  StudtGroup
  
  ##License

  ${renderLicenseSection}

  ##Badges

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT))
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)


  ##Contributing

  ${data.contributing}

  ##Tests

  ${data.tests}

  &copy 2023; Written by Andy Zurek
`;
}

module.exports = generateMarkdown;
