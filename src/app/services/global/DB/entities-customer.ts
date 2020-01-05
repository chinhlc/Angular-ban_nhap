export class Customer {
    name: string;
    phone: number;
    address: string;
    membership: string;
    id: number;
    
    static getCode() {
      return 'customer';
    }
    
    static getFields() {
      return "id,name,phone,address,membership";
    }

    isProMember() {
      return this.membership === 'Pro';
    }
  }
  