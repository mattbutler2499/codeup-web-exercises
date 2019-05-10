//Question 1
// function wait(num) {
//     const newPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num);
//             reject();
//         }, num);
//
//     });
//     return newPromise
// }
//
// wait(6000).then((ms) => console.log(`You'll see this after ${ms / 1000} seconds`));

//Question 2



function gitLastCommit(username){
     return fetch(`https://api.github.com//users/${username}/events`, {headers: {'Authorization': gitHubKey}})
        .then(res => res.json());
}

console.log(gitLastCommit('nnosaJasonn'));

