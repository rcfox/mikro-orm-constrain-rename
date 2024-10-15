Steps to Reproduce
==================

1. `git checkout 2c636aa3c8943a14441693223c6086211a5c1339`
2. `yarn install`
3. `npx mikro-orm-esm migration:up`
  * This will leave you in the v6.2.9 state
4. `git checkout 843dc0503b397808301c3d16de6836991794bb07`
5. `yarn install`
6. `npx mikro-orm-esm migration:create`
  * The `src/migrations/.snapshot-constraint-test.json` file will contain a rename of the `user_foo_really_really_really_really_really_real_d7f01_foreign` constraint that is not reflected in the generated migration.

You can also see this here: https://github.com/rcfox/mikro-orm-constrain-rename/commit/4e711630a1d8e7a606518311556055393fc4fc8a
