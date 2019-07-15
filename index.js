const user = {
  "user": {
    "name": "Olena",
    "age": 12.22,
    "friends": [
      "Ihor"
    ]
  }
};

let user2 = JSON.parse(JSON.stringify(user));
user2.user.name = 'Ira';

localStorage.setItem('user', JSON.stringify(user));
JSON.parse(localStorage.getItem('user'));


function ajax(method, url, successCb, errorCb) {
  const xhr = new XMLHttpRequest();
  
  xhr.open(method, url);
  xhr.send();

  xhr.addEventListener('load', successCb);
  xhr.addEventListener('error', errorCb);
}

// ajax('GET', 'google.com', function() {

//   ajax('GET', 'facebook.com', function() {

//     ajax('GET', 'twitter.com', function() {

//     });
//   });
// });




async function postTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'POST',
    body: JSON.stringify({
      text: 'hello'
    })
  });

  if (res.status !== 200) {
    return console.error('fail');
  }

  const data = await res.json();

}


async function complicatedRequests() {
  let posts = await fetch('https://jsonplaceholder.typicode.com/posts/');
  posts = await posts.json();
  
  let user = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`);
  user = await user.json();
}



async function parallelRequests() {
  let postsReq = fetch('https://jsonplaceholder.typicode.com/posts/');

  let usersReq = fetch(`https://jsonplaceholder.typicode.com/users/`);

  let users = await usersReq;
  let posts = await postsReq;

  posts = await posts.json();
  users = await users.json();
}

async function getUsers() {
  let users = await fetch(`https://jsonplaceholder.typicode.com/users/`);

  return users.json();
}
async function getPosts() {
  let posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  return posts.json();
}

async function getAllData() {
  let users = await getUsers();
  let posts = await getPosts();
  console.log('users: ', users);
  console.log('posts: ', posts);
};

getAllData();
fetch(`https://google.com`);
