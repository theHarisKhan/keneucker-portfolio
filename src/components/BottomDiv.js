export default function BottomDiv() {
  return (
    <div className="bottom-footer">
      <p>
        I am available for hire on remote contracts only, to get in touch please
        send me an email:{" "}
        <a href="mailto:hello@keneucker.com">hello@keneucker.com</a>
      </p>

      <div className="btn-container">
        <a href="https://www.buymeacoffee.com/keneucker" target="_blank">
          <button className="push-btn" style={{ background: "#90390c" }}>
            <span className="btn-front" style={{ background: "#FF813F" }}>
              <span>Buy me a Coffee</span>
              <img src="/coffecup.svg" alt="Buy me a Coffee" />
            </span>
          </button>
        </a>
        <a href="https://ko-fi.com/keneucker" target="_blank">
          <button className="push-btn" style={{ background: "#90390c" }}>
            <span className="btn-front" style={{ background: "#FF5E5B" }}>
              <span>Support me on Ko-fi</span>
              <img src="/kofi.svg" alt="Support me on Ko-fi" />
            </span>
          </button>
        </a>
      </div>
      <a
        className="sponsor-link"
        href="https://github.com/sponsors/KenEucker"
        target="_blank"
      >
        <img src="/octocat-for-sponsors.png" alt="sponsor me on github" />
        <span>Sponsor me on Github</span>
      </a>
    </div>
  );
}
