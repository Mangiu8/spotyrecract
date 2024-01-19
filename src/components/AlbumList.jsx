import { Col, Row } from "react-bootstrap";

const AlbumList = ({ title, albums }) => (
  <div className="col-12 pb-3 mt-5">
    <h2 className="text-light">{title}</h2>
    <Row className="imgLinks py-3 d-flex justify-content-between">
      {albums.length > 0 &&
        albums.slice(0, 4).map((singleAlbum) => (
          <Col key={singleAlbum.album.id} xs={12} md={6} lg={3} className="mb-3">
            <div>
              <img src={singleAlbum.album.cover_medium} alt={singleAlbum.album.title} className="img-fluid" />
              <div className="d-flex flex-column text-light">{singleAlbum.album.title}</div>
              <div className="text-light mt-2">{singleAlbum.artist.name}</div>
            </div>
          </Col>
        ))}
    </Row>
  </div>
);

export default AlbumList;
