import { useState } from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { PhoneStore } from "../../service/UpdatePhoneService";
import { useInject } from "../../ioc/useInject";
import { types } from "../../ioc/Types";


export default function UpdatePhone() {

    const [spidCode, setSpidCode] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const phoneStore = useInject<PhoneStore>(types.PHONE_STORE);
    
    console.log(phoneStore);
    
    function handleSpidCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
      setSpidCode(event.target.value);
    }
    function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPhone(event.target.value);
    }
    
    async function updatePhone(event: React.FormEvent) {
        event.preventDefault();
        setLoading(true);

        try {
            await phoneStore.updatePhone(spidCode, phone);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
          
        setSpidCode("");
        setPhone("");
    }
    
    return (
        <section>
          <h2>Update phone</h2>
          <form id="parent" onSubmit={updatePhone}>
            <div id="child">
              <h5 className="updatePhoneLabel">Spid Code:</h5>
              <input className="updatePhoneInput"
                type="text"
                value={spidCode}
                onChange={handleSpidCodeChange}
                disabled={loading}
                required
              />
            </div>
            <div id="child">
              <h5 className="updatePhoneLabel">Phone:</h5>
              <input className="updatePhoneInput"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                disabled={loading}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              Update
            </button>
          </form>
          {error && <Error />}
          {loading && <Loading />}
        </section>
      );
}