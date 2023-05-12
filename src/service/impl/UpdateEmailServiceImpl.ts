import axios from "axios";
import { EmailStore } from "../UpdateEmailService";

export class EmailStoreImpl implements EmailStore  {

  spidIdentityBaseUrl: string;
  spidCredentialBaseUrl: string;
  updateEmailBaseUrl: string;

  constructor (spidIdentityBaseUrl : string, spidCredentialBaseUrl : string, updateEmailBaseUrl :string){
    this.spidIdentityBaseUrl = spidIdentityBaseUrl;
    this.spidCredentialBaseUrl = spidCredentialBaseUrl;
    this.updateEmailBaseUrl = updateEmailBaseUrl;
  }

    //REGIBWHGM29271
    async updateEmail(spidCode: string, email: string) {
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

        const response3 = await axios.put(this.updateEmailBaseUrl + spidCredentialId, email, config);
        console.log(response3);
    }

}