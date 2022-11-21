# i18next

work in progress ...

## Deployment

### Branches

There are 3 main branches:

- staging
- development
- master (production)

Create a new branch for each new feature.

### Workflow

- Once features are implemented, they are merged into the staging branch  
and deployed to the Staging environment for quality assurance and testing.

- After testing is complete, feature branches are merged into the development branch.

- On the release date, the development branch is merged into production and then deployed to the Production environment.

### Environments

#### development environment

run locally

#### staging environment

Once the features are implemented and considered fairly stable, they get merged into the staging branch and then automatically deployed to the Staging environment. This is when quality assurance kicks in: testers go to staging servers and verify that the code works as intended.
**We should deploy to the staging environment automatically on every commit or push.**

#### Production environment

Once the feature is implemented and tested, it can be deployed to production.
If the feature was implemented in a separate branch, it should be merged into a stable development branch first. The branches should be deleted after they are merged to avoid confusion between team members.

The next step is to make a diff between the production and development branches to take a quick look at the code that will be deployed to production. This gives you one last chance to spot something that’s not ready or not intended for production. Stuff like debugger breakpoints, verbose logging or incomplete features.

Once the diff review is finished, you can merge the development branch into production and then initialize a deployment of the production branch to your Production environment by hand. Specify a meaningful message for your deployment so that your team knows exactly what you deployed.

Make sure to only merge development branch into production when you actually plan to deploy. Don’t merge anything into production in advance. Merging on time will make files in your production branch match files on your actual production servers and will help everyone better understand the state of your production environment.

**always deploying major releases to production at a scheduled time, of which the whole team is aware of.** Find the time when your application is least active and use that time to roll out updates. This may sound obvious, but make sure that it’s not too late, because someone needs to be around after the deployment for at least a few hours to monitor the application and make sure the deployment went fine. Urgent production fixes can be deployed at any time.

After deployment finishes make sure to verify it. It is best to check all the features or fixes that you deployed to make sure they work properly in production. It is a big win if the deployment tool can send an email to all team members with a summary of changes after every deployment. This helps team members to understand what exactly went live and how to communicate it to customers. 

### Rolling back

Sometimes deployments don’t go as planned and things break. In that case you have the possibility to rollback. However, you should be as careful with rollbacks as with production deployments themselves. Sometimes a rollback bring more havoc than the issue it was trying to fix. So first of all stay calm and don’t make any sudden moves. Before performing a rollback, answer the following questions:

**Did it break because of the code that I deployed, or did something else break?**
You can only rollback files that you deployed, so if the source of the issues is something else a rollback won’t be much help.

**Is it possible to rollback this release?**

Not all releases can be rolled back. Sometimes a release introduces a new database structure that is incompatible with the previous release. In that case if you rollback, your application will break.

=> If the answer to both questions is “yes”, you can rollback safely. After rollback is done, make sure to fix the bug that you discovered and commit it to either the development branch (if it was minor) or a separate bug-fix branch. Then proceed with the regular bug-fix branch → staging; bug-fix → development → production integration workflow.

### Deploying Urgent Fixes

Sometimes you need to deploy a bug-fix to production quickly, when your development branch is not ready for release yet. The workflow in that case stays the same as described above, but instead of merging the development branch into production you actually merge your bug-fix branch first into the development branch, then separately into production, without merging development into production. Then deploy the production branch as usual. This will ensure that only your bug-fix will be deployed to the Production environment without all the other stuff from the development branch that’s not ready yet.

It is important to merge the bug-fix branch to both the development and production branches in this case, because your production branch should never include anything that doesn’t exist in your stable development branch. The development branch is where developers work all day, so if your fix is only in the production branch they will never see it and it can cause confusion.

#### Automatic Deployments to Production?

I can’t stress enough how important it is for all production deployments to be performed and verified by a responsible human being. Using automatic deployments for Production environment is dangerous and can lead to unexpected results. If every commit is deployed to your production site automatically, imagine what happens when someone commits something by mistake or commits an incomplete feature in the middle of the night when the rest of the team is sleeping? Using automatic deployments makes your Production environment very vulnerable. Please don’t do that, always deploy to production manually.
