import { createClient } from "contentful";

const params = {
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
};

const client = createClient(params);

export const getPage = async (id) => {
  const query = {
    include: 10,
  };
  const response = await client.getEntry(id, query);
  return response || null;
};

export const getFooterNavLinks = async () => {
  const query = {
    content_type: "footer",
    include: 4,
  };
  const response = await client.getEntries(query);
  return response || null;
};

export const getHeaderNavLinks = async () => {
  const query = {
    content_type: "header",
    include: 4,
  };
  const response = await client.getEntries(query);
  return response || null;
};

export const getAnnoucementBar = async () => {
  const query = {
    content_type: "popUp",
    include: 4,
  };
  const response = await client.getEntries(query);
  return response || null;
};
