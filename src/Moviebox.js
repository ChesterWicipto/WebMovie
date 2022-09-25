// import { Modal, show } from "bootstrap";
import "./App.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviebox = ({ title, poster_path, overview, release_date, vote_average, id }) => {
  const ids = poster_path.replace("/", "").replace(".jpg", "");
  return (
    <div className="col bg-dark p-2 ">
      <div className=" ms-3 mb-3 mt-3 me-3">
        <div className=" card menu text-center text-white ">
          <div className="card-body">
            <img src={API_IMG + poster_path} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}</h5>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${ids}`}>
              View All
            </button>

            <div className="modal fade" id={`${ids}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className=" modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg ">
                <div className="modal-content bg-dark">
                  <div className="modal-body">
                    <img src={API_IMG + poster_path} className="img-thumbnail image" alt="..." />
                    <h2 className="card-title">{title}</h2>

                    <h3>Score: {vote_average}</h3>
                    <h4>Release date : {release_date}</h4>
                    <p>{overview}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <small>Release on: {release_date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviebox;
