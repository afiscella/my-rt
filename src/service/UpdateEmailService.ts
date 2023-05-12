export interface EmailStore {
  
    updateEmail(spidCode: string, email: string): Promise<void>;
  }