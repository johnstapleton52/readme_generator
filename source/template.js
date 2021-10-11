module.exports = (data) => {
    return `
# ${data.project_title}

## Description
${data.description}


## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  



## Installation
${data.installation_instructions}


## Usage
${data.usage_information}


## License
This application is covered under the ${data.license} license.


## Contributing
${data.contibution_guidelines}


## Tests
${data.test_instructions}


## Questions
Feel free to contact me through either of the methods listed below:  
email: [${data.email}](${data.email})   
GitHub: [${data.github_username}](https://github.com/${data.github_username})  

   
`;

};