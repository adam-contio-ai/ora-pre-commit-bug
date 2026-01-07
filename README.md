# Ora Pre-commit Test Project

This project demonstrates an issue where ora spinners may interfere with pre-commit hooks.

## Files Created

- `package.json` - Contains ora dependency
- `.pre-commit-config.yaml` - Pre-commit configuration with two hooks
- `hooks/immediate-echo.sh` - Hook that echoes "finished" immediately
- `hooks/delayed-echo.sh` - Hook that waits 10 seconds then echoes "finished"
- `test-spinner.js` - Test script that runs an ora spinner for 15 seconds

## To Test the Issue

1. Run the spinner test:
   ```bash
   npm test
   ```

2. In another terminal, try to make a commit:
   ```bash
   git add .
   git commit -m "Test commit"
   ```

The pre-commit hooks should run, but you may notice issues with the ora spinner interfering with the hook execution.