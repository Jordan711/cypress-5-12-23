# cypress-5-12-23

## Issue: Tests are loading very slowly when run using Chrome or Edge

## Cypress Version: 9.7.0

This is a fairly recent issue as it started occurring sometime last week. Tests that are run using the Chrome/Edge browser run a lot slower than before. This issue does not seem to affect the other browsers as when running this in FireFox or Electron, the runtime is substantially decreased. However, we'd like to continue running tests in Chrome due to the choice of browser from our user base.

## Steps:
1. Clone the repo
2. Run `yarn` to install all dependencies
3. Run `yarn run cypress open`
4. Once the Cypress UI opens, run `click.spec.js` in Chrome. Note the run time.
5. Then run the same test again using the Electron browser. Note the run time.

