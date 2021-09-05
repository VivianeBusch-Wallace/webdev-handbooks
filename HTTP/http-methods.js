/*

A middleware in POST will also but a middleware in PUT. Source: Own observation

PUT
"The PUT method completely replaces whatever currently exists at the target URL with something else. With this method, you can create a new resource or overwrite an existing one given you know the exact Request-URI.""
source: https://www.keycdn.com/support/put-vs-post

POST
"The HTTP POST method is used to send user-generated data to the web server. For example, a POST method is used when a user comments on a forum or if they upload a profile picture. A POST method should also be used if you do not know the specific URL of where your newly created resource should reside. In other words, if a new forum thread is created and the thread path is not specified then you could use some like:
POST /forums HTTP/2.0
Host: yourwebsite.com
Using this method, the URL path would be returned from the origin server and you would receive a response similar to:
HTTP/2.0 201 Created
Location: /forums/<new_thread>
In short, the POST method should be used to create a subordinate (or child) of the resource identified by the Request-URI. In the example above, the Request-URI would be /forums and the subordinate or child would be <new_thread> as defined by the origin.""
source: https://www.keycdn.com/support/put-vs-post

Success status code for POST is 201 - Created

Sending the same data several times with POST will each time create a new document containing this identical data but with a different _id




PUT vs POST
POST is used to create new documents
PUT is used to replace documents, but will create them when they don't exist yet
"choosing between using PUT vs POST should be based on the action's idempotence. As Wikipedia puts it,

Idempotence is the property of certain operations in mathematics and computer science, that can be applied multiple times without changing the result beyond the initial application

With this definition, we can say that the PUT method is idempotent because no matter how many times we send the same request, the results will always be the same. On the other hand, the POST method is not idempotent since if we send the same POST request multiple times, we will receive various results (e.g. a new subordinate will be created each time).""
Source: https://www.keycdn.com/support/put-vs-post

PUT vs PATCH
If you don't replace the full document with PUT, then all old data will be lost because PUT replaces the old document with the new document and every property without a value will hold the value null

To kill a PORT
fuser -k -n tcp <PORT_number>
OR
npx kill-port <PORT_number> 
OR
Solution for the Erdnuss/Peanut Butter Problem (code: "EADDRINUSE", errno:-98)
$ sudo fuser -k <PORT_number>/tcp
This command will kill whatever is happing on that specific port and make it available so that you can use it with node/nodemon.


*/
