import { useOutletContext  } from "react-router-dom";


const SignupsPage = () => {

    //getting the signupList from the router context
    const [signupList] = useOutletContext();

    return (
        <div>
            <h1> Signups Page</h1>
                <select onChange={(e) => {}}>
                    <option></option>
                </select>
        </div>
    )
}

export default SignupsPage;