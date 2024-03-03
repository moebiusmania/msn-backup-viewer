import { server$ } from "@builder.io/qwik-city";

import { XMLParser } from "fast-xml-parser";

/**
 * This needs to be a server only function because it uses `xml2json` which is not available in the browser.
 */
export const parse = server$((xml: string) => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });
  const json = parser.parse(xml);
  return json.Log ? json.Log.Message : [];
});
