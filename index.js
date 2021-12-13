const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(github.context);
  github.context.createIssue({
    title: 'Hello world', 
    body: 'This is a test issue'
  });
  // github.rest.createIssue({
  //   owner: github.context.payload.repository.owner.login,
  //   repo: github.context.payload.repository.name,
  //   body: `Hi \n\nThis is a test action.\n\nTime: ${time}`
  // });
} catch (error) {
  core.setFailed(error.message);
}
