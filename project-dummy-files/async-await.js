function getUserData(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: id, name: 'kartik'});
        }, 2000);
    });
}

function getRepos(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getComments(repo)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['comment1', 'comment2']);
        }, 2000);
    });
}

async function showComments()
{
    try
    {
        const userData = await getUserData(1);
        console.log(userData);
        const repos = await getRepos(userData.name);
        console.log(repos);
        const comments = await getComments(repos[1]);
        console.log(comments);
    }
    catch(err)
    {
        console.log(err.message);
    }
}

showComments();