# tsconfig

> Shared [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for my projects


## Install

```
$ npm install --save-dev @zcorky/tsconfig
```


## Usage

`tsconfig.json`

```json
{
	"extends": "@zcorky/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "es2018",
		"lib": [
			"es2018"
		]
	}
}
```


## License

MIT © [Zero](https://moeover.com)
