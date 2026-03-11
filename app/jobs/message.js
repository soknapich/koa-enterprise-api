const cron = require('node-cron');

// run every minute
cron.schedule('* * * * *', () => {
  console.log('Cron job running every minute');
});