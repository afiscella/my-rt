import axios from "axios";
import { PhoneStore } from "../UpdatePhoneService";

export class PhoneStoreImpl implements PhoneStore  {

    baseUrl1: string;
    baseUrl2: string;
    baseUrl3: string;

    constructor (baseUrl1 : string, baseUrl2 : string, baseUrl3 :string){
      this.baseUrl1 = baseUrl1;
      this.baseUrl2 = baseUrl2;
      this.baseUrl3 = baseUrl3;
    }

    //REGIBWHGM29271
    async updatePhone(spidCode: string, phone: string) {
        const response1 = await axios.get(this.baseUrl1 + spidCode);
        var spidId = response1.data.id;
        console.log(response1);
        console.log(spidId);

        const response2 = await axios.get(this.baseUrl2 + spidId);
        var spidCredentialId = response2.data.spidCredentialId;
        console.log(response2);
        console.log(spidCredentialId);

        const config = {
            headers: {
              'Content-Type': 'text/plain'
            }
          }

        const response3 = await axios.put(this.baseUrl3 + spidCredentialId, phone, config);
        console.log(response3);
    }

}