let i = 0;    

const id = setInterval(() => {
    console.log(i + 'seconds passed');
    i += 1;
}, 1000);

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Process p1');
        resolve(1);
    }, 2000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Process p2');
        resolve(2);
    }, 7000)
});

Promise.all([p1, p2])
    .then(result => {
        clearInterval(id);
        console.log(result)
    });