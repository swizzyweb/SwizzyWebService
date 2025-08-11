// @ts-ignore
import { Request } from "@swizzyweb/express";
import { SwizzyRequestStore } from "./swizzy-request-store.js";

export interface SwizzyRequest extends Request {
  swizzy: SwizzyRequestStore;
}
