const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('This task runs every minute');
});
