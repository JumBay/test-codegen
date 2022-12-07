import { request } from "graphql-request";
import { GetCountryDocument } from "./operation.generated.js";

export async function getCountry() {
  return await request(
    "https://countries.trevorblades.com/",
    GetCountryDocument,
    { code: "US" }
  );
}
