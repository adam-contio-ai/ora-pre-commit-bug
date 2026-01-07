# Ora Pre-commit Test Project

This project demonstrates an issue where ora spinners may interfere with pre-commit hooks.

## Files Created

- `package.json` - Contains ora dependency
- `.pre-commit-config.yaml` - Pre-commit configuration with three hooks
- `hooks/immediate-echo.sh` - Hook that echoes "finished" immediately
- `hooks/delayed-echo.sh` - Hook that waits 10 seconds then echoes "finished"
- `hooks/spinner-hook.sh` - Hook that runs the ora spinner
- `test-spinner.js` - Test script that runs an ora spinner for 15 seconds

## Setup

1. Install pre-commit (if not already installed):
   ```bash
   pip install pre-commit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install pre-commit hooks:
   ```bash
   pre-commit install
   ```

4. Confirm ora is working as expected:
   ```bash
   node ./test-spinner.js
   ```

## To Reproduce the Bug

Run the spinner hook directly:
```bash
pre-commit run spinner-hook --all-files
```

This will execute the ora spinner within the pre-commit hook environment, demonstrating the issue where the spinner may hang or not complete properly.

## Alternative Test Methods

1. Run all hooks:
   ```bash
   pre-commit run --all-files
   ```

2. Make a test commit:
   ```bash
   git add .
   git commit -m "Test commit"
   ```