import { app, env } from "./config";

app.listen({ port: env.PORT }).then(() => console.log("Server is running on port 3333"));
