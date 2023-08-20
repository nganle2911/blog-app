import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: "mysql",
    host: "127.0.0.1",
    port: 33061,
    username: "root",
    password: "2911",
    database: "db_blog",
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/database/migrations/*.js"],
    synchronize: false
}

const dataSource = new DataSource(dataSourceOptions); 
export default dataSource; 