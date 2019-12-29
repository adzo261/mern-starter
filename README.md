<div align="center">
<h1> MERN Starter Template     
  <p>
  <br>
    <a href="" alt="Codeagni">
      <img src="https://img.shields.io/badge/Made%20by-Codeagni-orange?style=for-the-badge" />
    </a>
  </p>
</h1>
An easy to use, mern template to kickstart developing apps
</div>
<br>
<p align="center">
    <a href="https://github.com/codeagni/mern-starter/blob/master/LICENSE" alt="License MIT">
      <img src="https://img.shields.io/github/license/codeagni/mern-starter?color=success" />
    </a>
    <a href="" alt="TravisCI">
      <img src="https://api.travis-ci.org/codeagni/mern-starter.svg?branch=master" />
    </a>
    <a href="https://github.com/airbnb/javascript" alt="Code Style">
      <img src="https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb" />
    </a>
</p>
<br>
<p align="center">
    <a href="" alt="@babel/core">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/dev/@babel/core?filename=client%2Fpackage.json" />
      </a>
    <a href="" alt="@babel/preset-env">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/dev/@babel/preset-env?filename=client%2Fpackage.json" />
      </a>
    <a href="" alt="@babel/preset-react">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/dev/@babel/preset-react?filename=client%2Fpackage.json" />
      </a>
    <a href="" alt="webpack">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/webpack?filename=client%2Fpackage.json" />
      </a>
    <a href="" alt="react">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/react?filename=client%2Fpackage.json" />
      </a>
       <a href="" alt="express">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/express?filename=server%2Fpackage.json" />
      </a>
    <a href="" alt="mongoose">
      <img src="https://img.shields.io/github/package-json/dependency-version/codeagni/mern-starter/mongoose?filename=server%2Fpackage.json" />
      </a>
      <a href="" alt="node">
      <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=node&query=%24.engines.node&url=https%3A%2F%2Fraw.githubusercontent.com%2Fcodeagni%2Fmern-starter%2Fmaster%2Fclient%2Fpackage.json" />
      </a>
</p>

## Hosted on Heruko

https://mern-starter.herokuapp.com/

## Structure

```sh
    .
    ├── client                        # client react app
        ├── dist                      # client build folder
        ├──  src
            ├──  components           # react components
            ├──  images               # image assets
            ├──  index.css            # base css
            ├──  index.html           # base html
            ├──  index.jsx            # base react component
        ├──.babelrc                   # babel config
        ├──.package.json
        ├──.webpack.config.babel.js   # webpack config written in es6
    ├── server                        # server express app
        ├── build                     # server build folder
        ├──  src
            ├──  bin
                ├──  www.js           # sever entry point
            ├──  routes               # routes folder
                ├──  index.js
            ├──  database.js          # database config
            ├──  server.js            # server config
        ├──.babelrc                   # babel confi
        ├──  .env                     # env variables
        ├──.package.json
    ├── .eslintrc.json                # es linting config
    ├── .prettierrc
    ├── .travis.yml                  # travis CI
    ├── package.json
    ├── LICENSE
    └── README.md
```

## Development setup

Fork it and clone as local repository.

```sh
$ cd mern-starter
$ npm install
$ npm run client-install
$ npm run server-install
```

Create a `.env` file in `server` folder as follows:

```
DATABASE=your_database_uri
```

Run app locally:

```sh
$ npm run dev
```

Run only client react app locally:

```sh
$ cd client
$ npm run start
```

Run only server express app locally:

```sh
$ cd server
$ npm run dev-start
```

## Contributing

1. Read the <a href="https://github.com/codeagni/mern-starter/blob/master/CODE_OF_CONDUCT.md" alt="@babel/preset-react">CODE OF CONDUCT</a>
2. Fork the repo
3. Create your feature branch (`git checkout -b feature/fooBar`)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request
