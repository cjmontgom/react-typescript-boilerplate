const dev = process.env.NODE_ENV !== 'production';

export const clientUrl = dev ? 'http://localhost:9000' : 'https://my_deployed_domain.com'
export const server = dev ? 'http://localhost:8080' : 'https://my_deployment.server.com';