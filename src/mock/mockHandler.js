import { rest } from "msw";

const todos = [
  "let's start create react app ",
  "install msw",
  "generate mockServiceWorker file using msw CLI",
];

export const handlers = [
  rest.get("/todos", (req, res, context) => {
    return res(context.status(201), context.json(todos));
  }),

  rest.post("/todos", (req, res, context) => {
    todos.push(req.body);
    return res(context.status(201));
  }),
];
