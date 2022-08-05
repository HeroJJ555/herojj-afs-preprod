import { GoogleLogin } from 'react-google-login';

const clientID = "1082372328759-mlb32jb60ceu3rbcjtqiu0jgoh5fbubr.apps.googleusercontent.com";

function Login() {

    const onSucces = (res) => {
        console.log("Zalogowano POPRAWNIE! Użytkownik: ", res.profileObj);  
    }

    const onFaliure = (res) => {
        console.log("Niezalogowano! res: ", res);
    }

    return(
        <div id='LoginButton'>
            <GoogleLogin
            clientId={clientID}
            buttonText="Zaloguj się"
            onSuccess={onSucces}
            onFailure={onFaliure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login;