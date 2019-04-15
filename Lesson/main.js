//Chapter 1: Async
/*
Async changes behavior of normal functions to promisses

“async” keyword directs Javascript to automatically wrap 
that value in a resolved promise.
*/
async function f() {
    return 'Hello world'
}

//Without "acync", next line throws error!
f().then(console.log);

//With async we can return obviously Promise.
async function fx() {
    return Promise.resolve('Hello');
}

fx().then(console.log);

//Chapter 2: "await"
/*
The keyword await makes JavaScript wait until that 
promise settles and returns its result.

!!! "await" works with async !!!
*/
async function myFirstAwait() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('done!'),2000);
    });

    //Without await "result" will be promise object not result of "resolve"
    let result = await promise;

    console.log (result);
}

myFirstAwait();

//Without async we can not use await!

/*function testAwait() {
    let promise = Promise.resolve('done!');
    //Error: Uncaught SyntaxError: await is only valid in async function
    let result = await promise;
    console.log(result);
}

testAwait();
*/

//get github avatar 
async function showAvatar() {
    //fetch all data from api
    let githubResponse = await fetch('https://api.github.com/users/bulentkyc');
    //convert data to json object
    let githubUser = await githubResponse.json();

    //create an empty img element
    let img = document.createElement('img');
    //set src for img
    img.src = githubUser.avatar_url;
    //you can add classes to html elements like this:
    img.className = 'promise-avatar-example';
    //append html element to body
    document.body.append(img);

    //Waits JS 3 seconds. Even if img not fetched next line will work after 3 seconds.
    await new Promise((resolve,reject)=> setTimeout(resolve,3000));
    //remove img element from body
    img.remove();
    return githubUser;
}

showAvatar();
//Next line never works. Because await works with async!
//let githubResponse = await fetch('https://api.github.com/users/bulentkyc');

//Async and await are usable with anonymous functions.
async () => {
    let githubResponse = await fetch('https://api.github.com/users/bulentkyc');
    let user = await Response.json();
    //...
}

//await accepts "then(ables)"

//Error Handling
//"await" is OK with reject also
async function awaitWithError () {
    await Promise.reject(new Error('Whooops!'));
}

awaitWithError();

//Even without promise it's OK. Because JS automatically wraps with promise.
async function awaitError () {
    throw new Error('Whoooops');
}

awaitError();


async function errorTryCatch () {
    /*
    JS will try to run "try" block. If there is an error on any line.
    catch block will run!
    */
    try {
        let response = await fetch('http://no-such-url');
    } catch (error) {
        console.log(error);
    }
}

errorTryCatch();

async function errorCatch (){
    let response = await fetch('http://no-such-url');
}

errorCatch().catch(alert);
