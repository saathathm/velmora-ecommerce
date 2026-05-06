import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };
  return (
    <nav
      className="d-flex justify-content-between align-items-center col-12 p-2"
      style={{}}
    >
      <div>
        <div className="navbar-brand">
          <Link to={"/"}>
            <img alt="logo" width="80px" src="/images/logo.png" />
          </Link>
        </div>
      </div>

      <div className="col-md-6 ">
        <Search />
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {isAuthenticated ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="default text-white pr-5"
              id="dropdown-basic"
            >
              <figure className="avatar avatar-nav">
                <Image
                  width={"50px"}
                  src={user.avatar ?? "./images/default_avatar.png"}
                ></Image>
              </figure>
              <span>{user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate("/myprofile");
                }}
                className="text-dark"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to={"/login"}>
            <button className="btn" id="login_btn">
              Login
            </button>
          </Link>
        )}
        <Link to={"/cart"}>
          <span id="cart" className="ml-3">
            Cart
          </span>
        </Link>
        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
