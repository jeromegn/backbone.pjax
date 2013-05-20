.PHONY: test

bin = ./node_modules/.bin

test:
	$(bin)/mocha -R spec

minify:
	$(bin)/uglifyjs -o backbone.pjax-min.js backbone.pjax.js

# Get version number from package.json, need this for tagging.
version = $(shell node -e "console.log(JSON.parse(require('fs').readFileSync('package.json')).version)")

# npm publish, public-docs and tag
publish :
	npm publish
	git push
	git tag v$(version)
	git push --tags origin master