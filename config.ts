export const APP_HOST = Deno.env.get("APP_HOST") || "0.0.0.0";
export const APP_PORT = Deno.env.get("APP_PORT") || 8080;

export const DB_CONFIG = Deno.env.get("DB_CONFIG") || {
    user: "postgres",
    database: "syllabus",
    hostname: "syllabus.cwzvpzw79ai6.ap-northeast-1.rds.amazonaws.com",
    password: "Masa0825",
    port: 5432
}
