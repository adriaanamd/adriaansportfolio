import assert from "node:assert/strict"
import test from "node:test"

import {
  assertSupportedNodeVersion,
  isSupportedNodeVersion,
} from "./node-version.mjs"

test("accepts the patched Node 24.22.1 release", () => {
  assert.equal(isSupportedNodeVersion("24.22.1"), true)
  assert.doesNotThrow(() => assertSupportedNodeVersion("24.22.1"))
})

test("accepts later patched releases in the Node 24 line", () => {
  assert.equal(isSupportedNodeVersion("24.22.2"), true)
  assert.equal(isSupportedNodeVersion("24.30.0"), true)
})

test("rejects Node 24 releases before the patched floor", () => {
  assert.equal(isSupportedNodeVersion("24.22.0"), false)
  assert.equal(isSupportedNodeVersion("24.0.0"), false)
  assert.throws(
    () => assertSupportedNodeVersion("24.22.0"),
    /Node\.js 24\.22\.1 or a newer patched 24\.x release/,
  )
})

test("rejects unsupported major versions and malformed values", () => {
  assert.equal(isSupportedNodeVersion("22.23.4"), false)
  assert.equal(isSupportedNodeVersion("25.0.0"), false)
  assert.equal(isSupportedNodeVersion("not-a-version"), false)
})
