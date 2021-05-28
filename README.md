Getting Started with the project on a local machine 

Requirements
1.Node.js
2.IDE


STEPS

Github repository path - https://github.com/kligan/react_optIn.git

1. Create a new folder e.g 'FolderX'

2.git clone https://github.com/kligan/react_optIn.git
Using gitbash or GitHub desktop navigate to the directory path and run the command above

3. Open FolderX in your IDE/code editor

4. cd react_optIn
Before installing node modules and starting the local server make sure to run the above command
e.g - C:\Tab\Users\FolderX\react_optIn

5.npm install
This command will install the required node-modules for the project to run

6.open another terminal with the same project path and run 'cd jsonServer'
(Make sure to run this command first.

7.npm start
This will execute local fake server on port 3001

8.npm start from initial terminal path
Client Server will run on port 3000

7.npm test
Run tests

*Please Note

To change the timer values, edit the json file from /jsonServer/db.json
 {
  "content": 
    {
      "id": 1,
      "cash_value": "10",
      "duration": "May 29, 2021 10:00:00",
      "opt_in": "https://www.jackpotjoy.com/"
    }
}

