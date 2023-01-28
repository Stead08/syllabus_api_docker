import {Application} from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes.ts"
//CORS対策用なのでローカル実行時のみimport
import { oakCors } from 'https://deno.land/x/cors/mod.ts'
import _404 from "./controllers/404.ts";
import errorHandler from "./controllers/errorHandler.ts"

const env = Deno.env.toObject();

const app = new Application();
// corsを有効化
app.use(oakCors())
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port: ${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`)
