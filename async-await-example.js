function getUserData(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {id: id, name: 'kartik', isGold: true, email: 'chauhan.kartik25@gmail.com'};
            resolve(data);
        }, 3000);
    });
}

function getPremiumMovies()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let movies = ['Shawshand redemption', 'Seven', 'The green mile'];
            resolve(movies);
        }, 2000);
    });
}

function sendEmail(email)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending email...');
            resolve(true);
        }, 2000);
    });
}

async function notifyGoldenUser()
{
    try
    {
        console.log('fetching user details');
        const userData = await getUserData(1);
        console.log(userData);
        if(userData.isGold)
        {
            console.log('fetching premium movies name');
            const premiumMovies = await getPremiumMovies();
            console.log(premiumMovies);
            const emailSent = await sendEmail(userData.email);
            if(emailSent)
                console.log('Email successfully sent');
        }
        else
        {
            console.log('Sorry, premium movies are only available for golden users');
        }
    }
    catch(err)
    {
        console.log(err.message);
    }
}


notifyGoldenUser();