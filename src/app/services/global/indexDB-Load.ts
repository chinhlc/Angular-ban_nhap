import { Injectable } from '@angular/core';
import { DatabaseProvider } from './indexDB';


@Injectable()
export class DatabaseLoader {

    protected db;

    constructor(protected databaseManager: DatabaseProvider) {
        this.db = this.databaseManager;
    }

    addData(entityCode, data) {
        this.db[entityCode].add(data);
    }

    putData(entityCode, data) {
        this.db[entityCode].put(data);
    }

    getDataValue(entityCode, key: string, type: string) {
        return new Promise(((resolve, reject) => {
            try {
                const data = this.db[entityCode].where(type).equals(key).first();
                return resolve(data);
            } catch (e) {
                reject(e);
            }
        }));
    }

    removeEntityData(entityCode, key: string, type: string) {
        return new Promise(((resolve, reject) => {
            try {
                const data = this.db[entityCode].where(type).equals(key).delete();
                return resolve(data);
            } catch (e) {
                reject(e);
            }
        }));
    }

    getData(entityCode) {
        console.log(entityCode)
        return new Promise((resolve, reject) => {
            try {
                this.db[entityCode].toArray().then((entities) => {
                    return resolve(entities);
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    getEntityInIndexedDB(entityCode) {
        return this.db[entityCode];
    }

    removeData(entityCode) {
        this.db[entityCode].clear();
    }

    async deleteDb() {
      await this.db.delete();
      await this.db.open();
    }

}
