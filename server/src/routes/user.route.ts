import { FastifyInstance } from "fastify"

async function routes(fastify: FastifyInstance) {
    fastify.get("/name", async (request, reply) => {
        return { hello: "Users" }
    })
}

export default routes
