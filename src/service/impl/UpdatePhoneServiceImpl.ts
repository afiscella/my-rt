import axios from "axios";
import { PhoneStore } from "../UpdatePhoneService";

export class PhoneStoreImpl implements PhoneStore  {

    spidIdentityBaseUrl: string;
    spidCredentialBaseUrl: string;
    updatePhoneBaseUrl: string;

    constructor (spidIdentityBaseUrl : string, spidCredentialBaseUrl : string, updatePhoneBaseUrl :string){
      this.spidIdentityBaseUrl = spidIdentityBaseUrl;
      this.spidCredentialBaseUrl = spidCredentialBaseUrl;
      this.updatePhoneBaseUrl = updatePhoneBaseUrl;
    }

    //REGIBWHGM29271
    async updatePhone(spidCode: string, phone: string) {
        const response1 = await axios.get(this.spidIdentityBaseUrl + spidCode);
        var spidId = response1.data.id;
        console.log(response1);
        console.log(spidId);

        const response2 = await axios.get(this.spidCredentialBaseUrl + spidId);
        var spidCredentialId = response2.data.spidCredentialId;
        console.log(response2);
        console.log(spidCredentialId);

        const config = {
            headers: {
              'Content-Type': 'text/plain'
            }
          }

        const response3 = await axios.put(this.updatePhoneBaseUrl + spidCredentialId, phone, config);
        console.log(response3);
    }

}