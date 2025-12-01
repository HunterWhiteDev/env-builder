# Disclaimer

> [!CAUTION]
> I am NOT responsible for you accidentally publishing your API keys to the public. Always double check your .env.example file. By using this software, you accept all risk involved.

### What is this?

This is a simple script that allows you to run the command `env-builder` in the terminal and copy the keys in your .env file into a .env.example file without the values.

### Why does this exist?

This exists because sometimes when I am working on software I add a bunch of key-value pairs to my `.env` file and it takes a bit of effort to strip the values away to keep the .env.example up to date. This will take only the keys in your `.env` strip the values, and update your `.env.example` to only show the blank keys with no values.

For example:

A `.env` file like this:

```
TEST_KEY1=ABCDEFGH
TEST_KEY=123456890
```

Will end up a `.env.example` file looking like this:

```
TEST_KEY1=
TEST_KEY=
```

### How do I install?

This project will only be comitting to github. I do not intend to promote this package, but if you find it useful, accept the risks, and want to utilize this script yourself you can install this globally on your machine by running the following command:

`npm install -g https://github.com/HunterWhiteDev/env-builder`

Now you can run the command `env-builder` from a directory with a .env file and it will replace the .env.example with the blank keys stripped from the `.env` file
