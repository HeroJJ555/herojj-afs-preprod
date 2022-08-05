import { GoogleLogout } from 'react-google-login';

const clientID = "1082372328759-mlb32jb60ceu3rbcjtqiu0jgoh5fbubr.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("Pomyślnie wylogowano!");
    }

    return (
        <div id='LogoutButton'>
            <GoogleLogout
                clientId={clientID}
                buttonText={"Wyloguj się"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;