// create const for badges
const badges = {
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Boost": "[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "Perl": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};

// create const for license sites
const licenseLinks = {
  "Unlicense": "http://unlicense.org/",
  "Apache": "https://opensource.org/licenses/Apache-2.0",
  "Boost": "https://www.boost.org/LICENSE_1_0.txt",
  "Perl": "https://opensource.org/licenses/Artistic-2.0",
  "MIT": "https://opensource.org/licenses/MIT"
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badges[data.license]}

  ## Description

  ${data.describe}

  ## Table of Contents
  
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ## License
  License is covered under: ${licenseLinks[data.license]}

  ## Contributing
  ${data.future}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach me by emailing [${data.email}](mailto:${data.email}) or follow the link to my gitHub profile [${data.userName}](https://github.com/${data.userName}).
`;
}

module.exports = generateMarkdown;
