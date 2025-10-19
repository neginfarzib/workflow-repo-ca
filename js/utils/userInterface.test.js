import { isActivePath } from "./userInterface";
import { expect, test } from "vitest";

test("returns true when current path matches href exactly", () => {
  expect(isActivePath("/", "/")).toBe(true);
  expect(isActivePath("/about", "/about")).toBe(true);
  expect(isActivePath("/contact", "/contact")).toBe(true);
  expect(isActivePath("/blog", "/bloog")).toBe(false);
});

test('returns true for root path ("/") when path is "/" or "/index.html"', () => {
  expect(isActivePath("/", "/")).toBe(true);
  expect(isActivePath("/", "/index.html")).toBe(true);
  expect(isActivePath("/", "/about")).toBe(false);
});

test("returns true when current path includes href", () => {
  expect(isActivePath("/about", "/about/team")).toBe(true);
  expect(isActivePath("/about", "/about")).toBe(true);
  expect(isActivePath("/about", "/contact")).toBe(false);
  expect(isActivePath("/about", "/aboout")).toBe(false);
});

test("returns false when paths don't match", () => {
  expect(isActivePath("/about", "/contact")).toBe(false);
  expect(isActivePath("/home", "/about/team")).toBe(false);
  expect(isActivePath("/about/index.html", "/about/")).toBe(false);
});
