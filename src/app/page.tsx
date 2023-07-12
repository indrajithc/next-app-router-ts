import { AuthRequiredError } from "./lib/exceptions";

let session = null;


export default function Home() {

  session = Math.random() > 0.5 

  if(!session ) throw new AuthRequiredError("");

  return (<div>This is an auth-only page</div>)
}
