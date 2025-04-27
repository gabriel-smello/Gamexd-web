import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div>
      <p style={{ fontSize: "6.0em", margin: "0px" }}>404</p>
      <h2>❌ Not Found ❌</h2>
      <Link to={"/"}>
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
