import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
export default Home;
