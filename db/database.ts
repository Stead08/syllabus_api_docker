import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";


class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client({
            user: "localuser",
            database: "SyllabusTest",
            hostname: "localhost",
            password: "password",
            port: 5432
        });

        await this.client.connect();
    }
}

export default new Database().client;