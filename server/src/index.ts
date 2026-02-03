import Fastify from "fastify"
import routes from "./routes/user.route"

const fastify = Fastify({
    logger: true,
})

fastify.get("/health", function (request, reply) {
    return { status: "OK" }
})

fastify.register(
    (fastify) => {
        fastify.register(routes, { prefix: "user" })
    },
    { prefix: "/api" },
)

const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || "0.0.0.0"
console.log(process.env.HOST)

fastify.listen({ port: PORT, host: HOST }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server is now listening on ${address}`)
})
