//-----------------------TASKS-----------------------//

1) Create a normal function and return some text.

2) Convert this function to promise with "async".

3) Create another function with async.

4) Return a promise object obviously. This object will contain same         message.

5) Compare these 2 functions. To do this log to console what returned       from functions

6) Create a function and into this create a promise. Assign this            promise to a variable. This promise on resolve should contain a         timeout function to return a message after 3 seconds.

7) Define a new variable into function. Assig output of promise on          number 6.

8) Log to console last variable (created on 7).

9) Use await on number 6 and check the changement on console.

10) Take off async from last function and check console again.

11) Create again show avatar without looking your code. Just use these informations:
    fetch(`https://api.github.com/users/{&username}`);
    create an img on html file yourself and give an id
    set src for this img from JS file like this: 
        img.src = githubUser.avatar_url;

12) Create a function with "async" and into that create try & catch
    blocks. 
    On try, try to fetch data from "http://no-such-url"
    On catch, alert this message: "There is no such a url!"
