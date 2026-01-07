import ora from 'ora';

const spinner = ora('Processing... and completing in 10 seconds').start();

// Simulate some work
setTimeout(() => {
  spinner.succeed('Done!');
}, 10000);