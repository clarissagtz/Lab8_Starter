# Lab 8 - Starter
Clarissa Gutierrez

Sashwat Nayak
 
QUESTIONS: 

1.  **Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**
 
Within a Github action that runs whenever code is pushed, because running tests manually takes a lot of time and could also contribute to human error. Furthermore, running all tests after development is complete requires multiple testing procedures to occur at one time, meaning we cannot see how specific features work.

2. **Would you use an end to end test to check if a function is returning the correct output? (yes/no)**
 
No.

3. **Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

The messaging feature of an app would be more appropriately tested by E2E testing than a unit test since it tests the functionality between a feature that reacts to the components of the app.


4. **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

 The max message length feature of an app would be appropriately tested by a unit test since it reacts with a part of the code that ensures the creation of the message.