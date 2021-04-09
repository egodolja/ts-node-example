/**
 * Semantic-Release configuration
 *
 * ## Branches 
 * Publishes package only on branch `master`.  
 *
 * ## Plugins
 * We use the default plugins (`commit-analyzer`, `release-notes-generator`, and `npm`) with one
 * addition: `git`.
 *
 * - `commit-analyzer`: Processes the commit logs from the last release to determine if a new
 *   release is necessary. If it is, this plugin will calculate the new version appropriately.
 * - `release-notes-generator`: Creates release notes from the commits between HEAD and last release.
 *   This will be put into the release commit.
 * - `npm`: This plugin is responsible for building and publishing the NPM module. It will also
 *   update the package.json with the new package version.
 * - `git`: This plugin adds the `package.json` with the new version number and commits the 
 *   release notes. The commit generated looks something like this.
 *
 *   chore(release): 1.X.X [skip ci]
 *
 *   # [1.X.X](vtag1..vtag2) (YYYY-MM-DD)   
 *
 *   ### Features
 *   ...
 *
 * - `github`: This plugin creates a Release with the same release notes generated above.
 *   It will also comment on all issues mentioned in the release, notifying watchers that 
 *   the issue is fixed in a release.
 *
 *   The comment looks like this:
 *   ```
 *   :tada: This issue has been resolved in version ${nextRelease.version} :tada:
 *
 *   The release is available on [GitHub release](<github_release_url>)
 *   ```
 *
 */
 module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        ["@semantic-release/git", {
          "assets": ["package.json"],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        "@semantic-release/github"
      ]
};
