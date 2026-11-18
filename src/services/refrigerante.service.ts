import { type Request, type Response } from "express";
import { knex } from "../database/knex";

class RefrigeranteService {
    async getAll(): Promise<Refrigerante[]> {
        const res = await knex.select("*").from("refrigerantes");
        return res;
    }

    async create(dados: CriarRefrigerante): Promise<Refrigerante> {
        const res = await knex.insert(dados).into("refrigerantes").returning("*");
        return res[0];
    }
}