import { useState } from "react";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { EmailStore } from "../../service/UpdateEmailService";
import { useInject } from "../../ioc/useInject";
import { types } from "../../ioc/Types";
import Textinput from "../Textinput/Textinput";

export default function UpdateEmail() {
  const [spidCode, setSpidCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const emailStore = useInject<EmailStore>(types.EMAIL_STORE);

  console.log(emailStore);

  function handleSpidCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSpidCode(event.target.value);
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function updateEmail(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      await emailStore.updateEmail(spidCode, email);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }

    setSpidCode("");
    setEmail("");
  }

  return (
    <section>
      <h2>Update email</h2>
      <form id="parent" onSubmit={updateEmail}>
        <Textinput
          label="SpidCode:"
          value={spidCode}
          onChange={handleSpidCodeChange}
          disabled={loading}
          required
        />
        <Textinput
          label="Email:"
          value={email}
          onChange={handleEmailChange}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          Update
        </button>
      </form>
      {error && <Error />}
      {loading && <Loading />}
    </section>
  );
}
