import { useOutletContext  } from "react-router-dom";


const SignupsPage = () => {

    //getting the signupList from the router context
    const [signupList] = useOutletContext();

    return (
        <div>
            <h1> Signups Page</h1>
                <select onChange={(e) => {}}>
                    <option></option>
                    {signupList.map((signup)=> {
                        return (<option value={signup.email}>{signup.firstName}</option>)
                    })}
                </select>
        </div>
    )
}

export default SignupsPage;