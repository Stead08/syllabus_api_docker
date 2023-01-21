import client from "../db/database.ts";

export type Beer = {
    name: string;
    brand: string;
    is_premium: boolean;
    registration_date: Date;
};

class BeerRepo {
    create(beer: Beer) {
        return client.queryArray
            `INSERT INTO beers (name, brand,is_premium,registration_date) VALUES (${beer.name}, ${beer.brand}, ${beer.is_premium},${beer.registration_date})`;
    }

    selectAll() {
        return client.queryArray`SELECT * FROM beers ORDER BY id`;
    }

    selectById(id: string) {
        return client.queryArray`SELECT * FROM beers WHERE id = ${id}`;
    }

    update(id: string, beer: Beer) {
        const latestBeer = this.selectById(id);

        return client.queryArray`UPDATE beers SET name = ${beer.name !== undefined ? beer.name : latestBeer.name}, brand = ${beer.brand !== undefined ? beer.brand : latestBeer.brand}, is_premium = ${beer.is_premium !== undefined ? beer.is_premium : latestBeer.is_premium} WHERE id = ${id}`;
    }

    delete(id: string) {
        return client.queryArray`DELETE FROM beers WHERE id = ${id}`;
    }
}

export default new BeerRepo();