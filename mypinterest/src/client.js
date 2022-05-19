import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "4miqpxpk",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "skTISnun9wSRfciSgMl3DFLC8OXiihO87GI8W2vnJhNUzCTLY2K6PI08Zt01C95YQZ3RGiAi0SRRCNimw3IQyDPMHfEzSslVAlJ5tV3vz4LUgoZxxtsvSf3E9z3rmOYMIBTQissd3yFRQcnFRTJyeaSlFWflxXskL78IHkONju0yblg6Act6",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
