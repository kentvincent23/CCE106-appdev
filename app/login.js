// app/login.js
import LoginScreen from '../components/LoginScreen';

export default function LoginRoute() {
  return <LoginScreen onLogin={(email, password) => console.log(email, password)} />;
}