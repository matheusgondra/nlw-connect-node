import { fastify } from "fastify";
import { type ZodTypeProvider, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { routes } from "../routes";
import { middlewares } from "./middlewares";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(middlewares);
app.register(routes);

export { app };
