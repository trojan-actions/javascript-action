const core = require('@actions/core');
const github = require('@actions/github');

try {
  github.rest.issues.create({
    owner: github.context.payload.repository.owner.login,
    repo: github.context.payload.repository.name,
    body: `Hi \n\nThis is a test action.\n\nTime: ${time}`
  });
} catch (error) {
  core.setFailed(error.message);
}
