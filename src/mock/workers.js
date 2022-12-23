import { setupWorker } from "msw";
import { handlers } from "./mockHandler";

export const worker = setupWorker(...handlers);
