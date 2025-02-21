import { app } from "./config/app";
import { env } from "./config/env";

app.listen({ port: env.PORT }).then(() => console.log("Server is running on port 3333"));
