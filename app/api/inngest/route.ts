import { serve } from "inngest/next";
import { helloFn } from '../../inngest/functions/hello'

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: helloFn,
  functions: [
    /* your functions will be passed here later! */
  ],
});