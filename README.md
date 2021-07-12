# MigrateExistingReactProjToTypeScript
This code base shows how you can migrate one existing react application (JS) to a typescript (TS/TSX). You can also use JS + TS together.

Step 1 - git clode
Step 2 - go to project folder and run 'npm install'
Step 3 - npm start 
step 4  - add TS/TSX file or modify existing JS to TS file. 

*** Build ***
npm run build ( generate prod build ) 

*** Issues ***
1. If you chunk entry point issue during build, run the below command and then initiate build
npm install -D extract-text-webpack-plugin@next

2. For BrowserslistError: Unknown browser query `dead` issue, delete "not dead" from package.json and trigger the build
 "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]

