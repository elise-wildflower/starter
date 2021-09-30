#Getting Started
TLDR: need to clone with a unique project name and rename database

git clone git@github.com:jimibue/starter-f21.git <new_project_name>
cd <new_project_name>
bundle
rename database to something unique may use new_project_name in database.yml
search for starter_f21 and replace <new_project_name>
rails db:create db:migrate db:seed
cd client
yarn
to test
rails s -p 3001
cd client && yarn start
HANDLE GITHUB need new repo
two ways do this

remove remote to github add new one (easiest, preferred)

git remote rm origin
create a new github repo
git remote add origin sshlinktorepo
remove git repo entirely and recreate a new a repo

rm -rf .git
git init
git add .
git commit -m 'init'
git remote add origin sshlink
