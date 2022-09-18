// import { Modal, show } from "bootstrap";
import "./App.css";
import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviebox = ({ title, poster_path, overview, release_date, vote_average, id }) => {
  const ids = poster_path.replace("/", "").replace(".jpg", "");
  return (
    // <div className="">
    //   <img src={API_IMG + poster_path} class="card-img-top" alt="..." />
    //   <div class="card-body">
    //     <h5 class="card-title">{title}</h5>
    //     {/* <p class="card-text">{overview}</p> */}
    //     <button type="button" className="btn btn-warning">
    //       View More
    //     </button>
    //   </div>
    // </div>
    <div className="col bg-dark p-2 ">
      <div className=" ms-3 mb-3 mt-3 me-3">
        <div class=" card menu text-center text-white ">
          <div class="card-body">
            <img src={API_IMG + poster_path} class="card-img-top" alt="..." />
            <h5 class="card-title">{title}</h5>
            {/* <p class="card-text">{overview}</p> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${ids}`}>
              View All
            </button>

            <div class="modal fade" id={`${ids}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class=" modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg ">
                <div class="modal-content bg-dark">
                  <div class="modal-body">
                    <img src={API_IMG + poster_path} class="img-thumbnail image" alt="..." />
                    <h2 class="card-title">{title}</h2>

                    <h3>Score: {vote_average}</h3>
                    <h4>Release date : {release_date}</h4>
                    <p>{overview}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small>Release on: {release_date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviebox;
