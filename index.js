const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('repo-token', { required: true })
const octokit = github.getOctokit(token)

try {

  const { context } = github
  const { owner, repo } = context.repo

  octokit.issues.create({
    owner,
    repo,
    title: `${tomorrow.format('YYYY-MM-DD')} Weekly Sync`,
    labels: ['☑ Meeting Notes'],
    assignees: ['GMAN']
  });

} catch (error) {
  core.setFailed(error.message);
}
