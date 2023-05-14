import { Link } from "react-router-dom";


export default function IndexPage() {
  return (
        <div>
            <ul>
            <li>
                <Link to="/email">Update email address</Link>
            </li>
            <li>
                <Link to="/phone">Update phone number</Link>
            </li>
            </ul>
        </div>
  );
}
