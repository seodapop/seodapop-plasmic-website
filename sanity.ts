import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from './sanity/env'

const sanity = createClient({
  projectId: projectId, // you can find this in sanity.json
  dataset: dataset, // or the name you chose in step 1
  apiVersion: apiVersion, // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

export default sanity;