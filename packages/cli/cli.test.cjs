const { test } = require('node:test');
const assert = require('node:assert/strict');

test('uses the CLI workspace', () => assert.equal(require('./package.json').name, '@example/cli'));
