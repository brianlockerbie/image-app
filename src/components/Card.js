import React from "react";

const Card = ({ images }) => {
    return (
       <>
        {images.map((image) => (
            <div key={image.id} className="card">
              <a
                href={image.largeImageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image.webformatURL}
                  alt="photograph"
                  className="cardImage"
                />
                <div className="cardInfo">
                  <p classNAme="user">Photo by {image.user}</p>
                  <p>
                    <i className="fas fa-eye"></i>
                    <span>Views:</span>
                    {image.views}
                  </p>
                  <p>
                    <i className="fas fa-download"></i>
                    <span>Downloads:</span>
                    {image.downloads}
                  </p>
                  <p>
                    <i className="fas fa-heart"></i>
                    <span>Likes:</span>
                    {image.likes}
                  </p>
                </div>
              </a>
            </div>
          ))}
      </>
    );
};

export default Card;