import ora from 'ora';

const spinner = ora('Processing...').start();

// Simulate some work
setTimeout(() => {
  spinner.succeed('Done!');
}, 15000);