getData(1)
    .then(userData => {
        console.log('Got user data');
        console.log(userData);
        return getRepos(userData.name)
    })
    .then(repos => {
        console.log('Got repos');
        console.log(repos);
        return getComments(repos[0])
    })
    .then(comments => {
        console.log('Got comments');
        console.log(comments)
    })
    .catch(err => console.log(err.message));

function getData(id)
{
    console.log('User with Id', id);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user data from database');
            let data = {id: id, name: 'Kartik'};
            resolve(data);
        }, 2000);    
    });
}

function getRepos(name)
{
    console.log('Getting repos of user with name', name);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let repos = ['repo 1', 'repo 2', 'repo 3'];
            resolve(repos);
        }, 2000)
    });
}

function getComments(repoName)
{
    console.log('Repo name', repoName);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Parsing all comments');
            resolve(['first comment', 'second comment']);
        }, 2000);
    });
}