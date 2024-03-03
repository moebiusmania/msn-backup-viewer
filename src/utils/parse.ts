import { server$ } from "@builder.io/qwik-city";

// @ts-ignore - no types
import parser from "xml2json";

/**
 * This needs to be a server only function because it uses `xml2json` which is not available in the browser.
 */
export const parse = server$((xml: string) => {
  const parsed = parser.toJson(xml);
  const json = JSON.parse(parsed);
  console.log(json.Log);
  return json.Log ? json.Log.Message : [];
});
