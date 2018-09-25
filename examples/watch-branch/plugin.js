const prompts = require('prompts');
const gitRoot = require('git-root-dir');
const NodeGit = require('nodegit');

class JestWatchBranchPlugin {
  getUsageInfo() {
    return {
      key: 'b',
      prompt: 'test changes since a given branch',
    };
  }

  async run(globalConfig, updateConfigAndRun) {
    const branches = await this._getBranches(globalConfig.rootDir);
    const { branch } = await prompts({
      type: 'select',
      name: 'branch',
      message: 'Which branch do you want to base off of?',
      choices: branches,
    });

    updateConfigAndRun({ mode: 'watch', changedSince: branch });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    return true;
  }

  async _getBranches(rootDir) {
    const root = await gitRoot(rootDir);

    if (!root) {
      throw new Error('Unable to find git root');
    }

    const repo = await NodeGit.Repository.open(root);

    const [references, currentBranchRef] = await Promise.all([
      repo.getReferences(NodeGit.Reference.TYPE.LISTALL),
      repo.getCurrentBranch(),
    ]);

    const currentBranch = currentBranchRef.shorthand();

    return references.map(r => r.shorthand()).map(branch => ({
      value: branch,
      title: currentBranch === branch ? `${branch} (current branch)` : branch,
    }));
  }
}

module.exports = JestWatchBranchPlugin;
