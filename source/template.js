module.exports = (data) => {
    return `
    # ${data.project_title}

    ## Description
    ${data.description}


    ## Table of Contents
    [Installation](###### Installation)
    [Usage](###### Usage)
    [License](###### License)
    [Contributing](###### Contributing)
    [Tests](###### Tests)
    [Questions](###### Questions)



    ###### Installation
    ${data.installation_instructions}


    ###### Usage
    ${data.usage_information}


    ###### License
    ${data.license}


    ###### Contributing
    ${data.contibution_guidelines}


    ###### Tests
    ${data.test_instructions}


    ###### Questions
    Feel free to contact me through either of the methods listed below:
    email: [${data.email}](${data.email})
    GitHub: [${data.github_username}](https://github.com/${data.github_username})

   
    `;

};