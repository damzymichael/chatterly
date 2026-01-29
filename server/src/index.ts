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

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    // Todo Restart server with pm2 when error is thrown
    process.exit(1)
  }
  // Server is now listening on ${address}
})
