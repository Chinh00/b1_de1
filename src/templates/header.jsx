import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="./assets/images/logo.png" alt="" />
      </div>
      <div className="header_right">
        <div className="header_right_top">
          <span type="span">
            <a href="" style={{color: "black"}}>Login</a>
          </span>
          <img src="./assets/images/vi.jpg" alt="" />
          <img src="./assets/images/en.jpg" alt="" />
        </div>
        <div className="header_right_bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" className="input" placeholder="Tìm kiếm" />
          <button type="button">Tìm</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
