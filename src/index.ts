import dotenv from 'dotenv'
import { TwitterClient } from 'twitter-api-client';
import IClientOptions from 'twitter-api-client/dist/base/IClientOptions';


dotenv.config()

const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  });

   async  function  isWorking ()  {
         const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'aruljoe37' });

         console.log(data);
         
  }
//   isWorking() 