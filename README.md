***Welcome to my project!***

[Due to issues with GIT I had to convert a few things and handle pull request bugs, therefore the code has been re-uploaded]

This folder consists of several files; every "cy.js" file consists of a test for the
website: https://accept.ocp.technischeunie.nl 

Under .support you will find a file "commands.js" which consists of the commands and a file "selectors.js" which I have created to improve the adjustability and the readablitiy of this code. 

Any general notes or bugs will be commented inside a file (top). Specific comments
can be found right above the concerned line. 

***ABOUT MY APPROACH***

The first steps consited of analysing the website manually, 
reading the assignment completely and making sure my Cypress setup worked as it should ("firstTest.cy.js").
After these basic practices, I was able to start coding (ofcourse with the help of Google! see below for specific sources).
Separate files seemed the best approach to me, due to my limited knowledge on Cypress (debugging). 
After every small adjustment, the test had to run again to prevent nested bugs. 

Finally, I tried to focus on readability and best practices inside Cypress. Unfortunately I was not able to apply all. 
Examples of best practices I wanted to apply, but did not complete yet:

1) Remove {force:true} 
    Deal with property - display: none
    Deal with covered objects

2) Complete several "it{}" in one file, without Cypress going to a default blank page

3) End every test with an assertion 

Beside that, most of the code is working! 


===================================================================================

***ANOMALY DETECTED***

More information inside the following file: 
"cypress\e2e\ReturnPageOrdRef.cy.js"


===================================================================================

***HOW TO RUN MY TESTS***

In order to run the test for the first time, use "npx cypress open" in your command prompt. Make sure that you are located inside the folder of the project. 
Inside Cypress choose "E2E Testing" and then whatever browser you would like. 

Now you are able to see and click on all my Cypress spec files. 

In order to run the test (after making any changes) in the .cy.js file, you will have to manually press the reload button, or use "ctrl + R" in the Cypress interface in your Browser. 

====================================================================================


***Main sources used to complete this task:*** 

    *https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

    *https://docs.cypress.io/api/cypress-api/keyboard-api

    *https://stackoverflow.com/
====================================================================================
