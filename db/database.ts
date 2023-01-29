import {Client} from "https://deno.land/x/postgres@v0.17.0/mod.ts";
//import {DB_CONFIG} from "../config.ts";

const DB_CONFIG = Deno.env.get("DB_CONFIG")
class Database {
    client ?: Client

    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client(DB_CONFIG);
        if (this.client === undefined) {
            throw new Error("DB login information is invalid")
        }
        await this.client.connect();
    }
}

export default new Database().client;