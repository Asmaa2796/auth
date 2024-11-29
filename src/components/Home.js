import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
    const {logout} = useUserAuth();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="container text-center py-5">
            <h4>Hello Author!</h4>
            <hr/>
            <button onClick={handleLogout} className="btn btn-dark">Logout</button>
        </div>
    );
}

export default Home;
