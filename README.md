# scipylatam-webpage-2021
Scipy Latin America Conference 2021 Website


## install python packages

```bash
$ poetry install
```

## install yarn packages

```bash
$ cd webpack/
$ yarn
```

## run lektor

```bash
$ poetry run lektor server -f webpack
```

## deploy pages

```bash
$ export LEKTOR_DEPLOY_USERNAME=xxxxxxxxxxxxxx
$ export LEKTOR_DEPLOY_PASSWORD=xxxxxxxxxxxxxx
$ poetry run lektor deploy ghpages
```
