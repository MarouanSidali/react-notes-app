import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CreateNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg prinmary">Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea placeholder="Note details..." rows="20"></textarea>
      </form>
    </section>
  );
};

export default CreateNote;