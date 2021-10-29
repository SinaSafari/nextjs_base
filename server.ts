import express, { Request, Response } from "express";
import next from "next";
import Knex from "knex";
import { Model } from "objection";

import knexfile from "./src/database/knexfile";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  try {
    const knex = Knex(knexfile.development);
    Model.knex(knex);

    await app.prepare();
    const server = express();
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
