import Dexie from 'dexie';
import { Customer } from './DB/entities-customer';


export class DatabaseProvider extends Dexie {
    static _countIndex: number = 0;

    customer: Dexie.Table<Customer, string>;

    constructor() {
        ++DatabaseProvider._countIndex;
        if (DatabaseProvider._countIndex > 1) {
            console.log('%c Error!!! Already more than one object initialization ', 'color: red');
        } else {
            console.log('%c Init DB! ', 'color: #bada55');
        }

        super('DemoLC');
        const db = this;

        db.version(1).stores({
            customer: Customer.getFields(),
        });

        // Map physic class to database object
        db.customer.mapToClass(Customer);
    }
}

if (!window.hasOwnProperty('DemoLC')) {
    window['DemoLC'] = new DatabaseProvider();
}
export const db: DatabaseProvider = window['DemoLC'];
