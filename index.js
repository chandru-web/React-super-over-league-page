const element = (
  <div className="bg-container">
    <div className="super-over-container">
      <h1 className="heading">Super Over League</h1>
      <div className="team-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          alt="rcb"
          className="rcb"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          alt="csk"
          className="csk"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
