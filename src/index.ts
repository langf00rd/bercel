import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
   return c.text("Hello Hono!");
});

const port = 3000;

console.log(`server is running on port ${port}`);

serve({
   fetch: app.fetch,
   port,
});
