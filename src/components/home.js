function Home() {
  return (
    <div className="home-section">
      <div className="hs-wrapper">
        <div className="hs-content">
          <h1 className="display">
            Ken <span>Eucker</span>
          </h1>
          <p>
            Hello, I'm Ken Eucker. I love to design applications, write poetry,
            ride my bicycle, hike to hot springs, backpack through forests, take
            candid photographs, and talk about the intersection of technology
            and psychology.
          </p>
          <a href="/Ken_Eucker_Resume_2022.pdf" download>
            <button className="push-btn" style={{"background": 'hsl(0deg 95% 25%)'}}>
              <span className="btn-front" style={{"background": '#ff0000'}}>
                <span>Resume</span>
                <img src="/pdf-icon.svg" alt="pdf icon" />
              </span>
            </button>
          </a>
        </div>
        <div className="hs-thumbnail">
          <div className="hs-bolb">
            <img
              src="/ken_eucker_boom_headshot_cropped-removebg.png"
              alt="Ken Eucker Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
