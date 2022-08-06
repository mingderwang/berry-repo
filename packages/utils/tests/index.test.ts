import { testProp, fc } from '@fast-check/ava';
const message = require('../dist/main.cjs')

testProp('should be a hello, world', [fc.string()], (t, a) => {
  t.true((message).equal('Hello, World!'));
});

