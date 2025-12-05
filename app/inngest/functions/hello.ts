import { inngest } from "../client";

export const helloFn = inngest.createFunction(
  { id: "hello" },
  { event: "test/hello" },
  async ({ event }) => {
    console.log("Hello function triggered!", event);
    return { ok: true };
  }
);
