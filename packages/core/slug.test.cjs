const { test } = require('node:test');
const assert = require('node:assert/strict');
const slug = require('./slug.cjs');

test('trims whitespace', () => assert.equal(slug(' alpha '), 'alpha'));
