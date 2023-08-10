import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
    projectId: 'oewnjjzb',
    dataset: 'production',
    apiVersion: '2023-08-09',
    useCdn: false,
}
const client = createClient(config)

export default client