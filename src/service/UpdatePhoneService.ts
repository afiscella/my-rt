export interface PhoneStore {
  
    updatePhone(spidCode: string, phone: string): Promise<void>;
  }