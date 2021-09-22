import dotenv from 'dotenv'
import { TwitterClient } from 'twitter-api-client';
import {CronJob} from 'cron'


dotenv.config()

const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  });

   async function tweet(query:string) {
       try {
        const res:any = await twitterClient.tweets.search({q:query,result_type:"recent",count:1,since_id:0})
        // console.log(res);
        const {id_str} = res.statuses[0];
        await twitterClient.tweets.favoritesCreate({id:id_str})
        await twitterClient.tweets.statusesRetweetById({id:id_str})      
       } catch (e) {
         console.log(e);
       }
  }
  tweet("#javascript") 




  let job = new CronJob('0 * * * *', function() {
    tweet("#javascript") 
    console.log("Up and Running");
    
  }, null, true, 'Asia/Kolkata');                                            
  job.start();