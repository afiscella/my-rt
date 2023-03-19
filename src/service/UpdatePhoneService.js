import axios from "axios";

export class PhoneStore {

    constructor(baseUrl1, baseUrl2, baseUrl3) {
        this.baseUrl1 = baseUrl1;
        this.baseUrl2 = baseUrl2;
        this.baseUrl3 = baseUrl3;
    }

    //REGIBWHGM29271
    async updatePhone(spidCode, phone) {
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

}export const phoneStore = new PhoneStore(
    "/spid-ks/spididentity/bySpidCode/",
    "/spid-ks/spidcredential/spididentity/",
    "/spid-ks/spiduser/phone/"
);