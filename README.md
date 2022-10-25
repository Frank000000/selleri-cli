## Install

```bash
# initialization
pnpm init -y

# To temporarily upgrade `selleri-cli` to a global command, we run `npm link`
npm link

# At this time, you can use `selleri-cli` on the console to print
selleri-cli

# Install `command`,then you can use:
selleri-cli -V
selleri-cli -h

# We need to introduce the plug-in `chalk` to add more Tips(Run selleri-cli <command> --help for detailed usage of given command.)
selleri-cli -h

# creat project
selleri-cli create test --force

# Handling directory duplication
selleri-cli creat test

# Add calling template API,then download temlate
selleri-cli creat test
```
