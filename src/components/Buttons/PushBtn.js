function PushBtn({ children }) {
  return (
    <button className="push-btn">
      <span className="btn-front">{children}</span>
    </button>
  );
}

export default PushBtn;
