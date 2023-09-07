import "../styles/mainContent.css";
function MainContent() {
  const reloadOnClick = () => {
    window.location.reload();
  };
  return (
    <div className="main">
      <div className="image-container">
        <img src="https://source.unsplash.com/random/" alt="landscape" />
      </div>
      <button className="button" onClick={reloadOnClick}>
        CLICK ME
      </button>
    </div>
  );
}
export default MainContent;
