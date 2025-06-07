import { XMLParser } from "fast-xml-parser";
import type { MSNmessage } from "../types.ts";

export function parse(xml: string): MSNmessage[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });
  const json = parser.parse(xml);
  return json.Log ? json.Log.Message : [];
} 