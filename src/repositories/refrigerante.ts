import { knex } from "../database/knex.js";
import { pg } from "pg";

export class RefrigeranteRepository {
    async getAll() {
        return await knex.select("*").from("refrigerantes");
    }

    async create(dados: any) {
        const [res] = await knex.insert(dados).into("refrigerantes").returning("*");
        return res;
    }
}
