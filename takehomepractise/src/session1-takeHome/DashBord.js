import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <form>
        <label>
          Name:
          <input type="text" className="name" placeHolder="Name" />
        </label>
        <br />
        <br />
        <label>
          Email
          <input type="text" className="className" placeHolder="Email" />
        </label>
      </form>
      <img
        src="https://reactjs.org/logo-og.png"
        alt="React Image"
        className="rImage"
      />
    </div>
  );
}
