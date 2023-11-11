// let email = "shimite@yahoomail.com"

// let symbol = email.indexOf("@");
// let dot = email.lastIndexOf(".")
// console.log(symbol);

// let userName = email.slice(1,symbol);

// console.log (userName);

// let domain = email.slice(1);
// console.log(domain)


// let mailServer = email.substr(symbol);
// console.log(mailServer);

// let upperCaseUsername = (email.charAt("s"));  //* THis is the uppercase of the first letter of username*//
// console.log (upperCaseUsername.toUpperCase());

// let finalUserName = (upperCaseUsername.toUpperCase()); //* This is the given of the first letter uppercase*//
// console.log(finalUserName);



// let totalUsername = (finalUserName + userName); //* SO here i joined the final uppercase first letter to username **//
// console.log(totalUsername);


// let upperCaseMailserver = (email.charAt("6").toUpperCase())
// console.log (upperCaseMailserver)



// console.log( totalUsername + mailServer);

// let yourEmail = ( totalUsername + mailServer);


// console.log(yourEmail);



const email = 'shimite@gmail.com'

const indexAt = email.indexOf('@');
const indexdot = email.indexOf('.');
const userName  = email.substring (0,indexAt);
const upperUserName = userName
.substring(0,1)
.toUpperCase()
.concat(userName.substring(1,indexAt));

console.log(upperUserName)

const domain = email.substring(indexAt + 1, indexdot )
 const upperDomain = domain.substring(0,1)
 .toUpperCase()
 .concat(domain.substring(1,indexdot))
 


 console.log(upperDomain)

 const extention = email.substring(indexdot + 1, email.length);


 const capExtention = extention.substring(0,1)
 .toUpperCase().concat(extention.substring(1,extention.length))
 
 console.log(capExtention)

