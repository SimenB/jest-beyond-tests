const prompts = require('prompts');
const { findRepos } = require('jest-changed-files');
const simpleGit = require('simple-git/promise');

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
    // findRepos return a set of git repos and a set of hg repos.
    // It doesn't really make sense to use this plugin across different
    // repositories, so we assume there's a single repository
    // for `rootDir` by just getting the first one
    const { git: roots } = await findRepos([rootDir]);

    const [root] = Array.from(roots);

    if (!root) {
      throw new Error('Unable to find git root');
    }

    const repo = simpleGit(root);

    const { branches } = await repo.branch();

    return Object.values(branches)
      .map(branch => ({
        ...branch,
        name: branch.name.replace(/^remotes\//, ''),
      }))
      .map(({ current, name }) => ({
        value: name,
        title: current ? `${name} (current branch)` : name,
      }));
  }
}

module.exports = JestWatchBranchPlugin;
