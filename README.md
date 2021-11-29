# install node js on your system
# check whether node js and npm are installed by running below commands
node -v
npm -v

# Go to the root directory and run below command to fetch all dependencies
npm install

# Spin node js server by running below command and this should make server up on port 3000
node app.js

# To test the two zendesk API's we are using, run below command. If test cases are passing, we shouldn't see any issues
npm test