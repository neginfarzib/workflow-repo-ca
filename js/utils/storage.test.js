import { getUsername } from "./storage.js";
import { beforeEach, describe, expect, test } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Test that it returns the name from the user object in storage (first save a user object to storage)", () => {
    const mockUser = { name: "TestUser" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    expect(getUsername()).toBe("TestUser");
  });

  test("Test that it returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
