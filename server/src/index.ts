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

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
