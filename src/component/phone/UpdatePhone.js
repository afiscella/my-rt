import { useState } from "react";
import { phoneStore } from "../../service/UpdatePhoneService";
import Error from "../Error/Error";

export default function UpdatePhone() {

    const [spidCode, setSpidCode] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    function handleSpidCodeChange(event) {
      setSpidCode(event.target.value);
    }
    function handlePhoneChange(event) {
        setPhone(event.target.value);
      }
    
    async function updatePhone(event) {
        event.preventDefault();
        setLoading(true);

        try {
            await phoneStore.updatePhone(spidCode, phone);
        } catch (error) {
          setError((error).message);
        } finally {
          setLoading(false);
        }
          
        //setSpidCode("");
        //setPhone("");
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
              />
            </div>
            <div id="child">
              <h5 className="updatePhoneLabel">Phone:</h5>
              <input className="updatePhoneInput"
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                disabled={loading}
              />
            </div>
            <button type="submit" disabled={loading}>
              Update
            </button>
          </form>
          {error && <Error />}
        </section>
      );

}