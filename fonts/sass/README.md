# Sass Boilerplate

This is a sample project using the [7-1 architecture pattern](http://sass-guidelin.es/#architecture) and sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.

Each folder of this project has its own `README.md` file to explain the purpose and add extra information. Be sure to browse the repository to see how it works.

## Using the indented syntax

This boilerplate does not provide a `.sass` version as it would be painful to maintain both versions without an appropriate build process. However, it is very easy to convert this boilerplate to Sass indented syntax.

Clone it, head into the project and then run:

```
sass-convert -F sass -T scss -i -R ./ && find . -iname "*.sass" -exec bash -c 'mv "$0" "${0%\.sass}.scss"' {} \;
```

# SASS Environment Setup

Before you start developing with SASS, you will need to install a few things: Ruby to get Sass and NodeJs to get npm so we can work with Grunt.

Ruby: I would recommend installing `Ruby 2.2.X`. I used Ruby 2.2.6 (x64). Here is the link: `http://rubyinstaller.org/downloads/`

NodeJs: I would recommend installing NodeJs `v6.9.4 LTS` or the “Recommended For Most Users”. Here is the link: `https://nodejs.org/en/`

Restart your machine.

Once you have these two installed, you can now install all the dependencies for the sass project. Open the command line and cd into your project root directory where the files `Gruntfile.js` and `package.json` reside (C:\Your_Project\). Now simply run npm install and all your project dependencies (it will create a node_modules folder) will be installed.

Grunt: To get started, you'll want to install Grunt's command line interface (CLI) within your project directory (C:\Your_Project\) by running the command `npm install -g grunt-cli`.

Now you are ready to compile your sass main.scss to main.css. Open your command line and cd into your project’s stylesheets folder. The directory will look like this: C:\Your_Project\sass\stylesheets. Finally, you can run grunt watch to compile your sass into css! This command will keep running until it’s manually interrupted.