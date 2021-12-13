const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('repo-token', { required: true })
const octokit = github.getOctokit(token)

try {

  const { context } = github
  const { owner, repo } = context.repo

 await octokit.issues.create({
    owner,
    repo,
    assignees: ['gusshawstewart']
  });

} catch (error) {
  core.setFailed(error.message);
}
