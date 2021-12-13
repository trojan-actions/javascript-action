const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(repo: github.context.payload.repository.name);
  github.rest.issues.createComment({
    owner: github.context.payload.repository.owner.login,
    repo: github.context.payload.repository.name,
    issue_number: github.context.payload.issue.number,
    body: `Hi ${nameToGreet}!\n\nThis is a test action.\n\nTime: ${time}`
  });
} catch (error) {
  core.setFailed(error.message);
}
