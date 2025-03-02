const fs = require("fs").promises;

const FILE_PATH = "/home/agil/Documents/sem-6/PPL/lab/Task/2/tugas-2-lab-ppl/databases/db_arsip_buku.json";

const readDatabase = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeDatabase = async (books) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(books, null, 2), "utf8");
};

module.exports = { readDatabase, writeDatabase };
