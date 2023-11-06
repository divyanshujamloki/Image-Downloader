import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fileDownload from "js-file-download";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home({ searchQuery }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.totalItems / itemsPerPage);

  useEffect(() => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${
        (page - 1) * itemsPerPage
      }&limit=${itemsPerPage}`
    )
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      });
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const download = (url) => {
    fileDownload(url, "image.png");
  };

  const filteredPhotos = data.photos
    ? data.photos.filter((photo) =>
        photo.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <div>
        <h1 id="head" style={{ color: "purple" }}>
          Image Downloader
        </h1>
        <div className="body">
          <h2>
            <iframe src="https://embed.lottiefiles.com/animation/64732"></iframe>
            !!!! FREE IMAGE !!!!
          </h2>
        </div>

        <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <div key={photo.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={photo.url} alt="image" />
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                  <Button variant="primary" onClick={() => download(photo.url)}>
                    Download
                  </Button>
                </Card.Body>
              </Card>
              <div
                class="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="divyanshu-jamloki-2a7789250"
                data-version="v1"
              >
                <a
                  class="badge-base__link LI-simple-link"
                  href="https://in.linkedin.com/in/divyanshu-jamloki-2a7789250?trk=profile-badge"
                >
                  Divyanshu Jamloki
                </a>
              </div>
            </div>
          ))}
        </div>

        <Stack spacing={2} marginLeft={60} marginTop={10} marginBottom={10}>
          <Pagination
            count={10}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>

        <footer
          style={{
            backgroundColor: "black",
            color: "white",
            marginBottom: "0",
          }}
        >
          Divyanshu Jamloki copyright ©
        </footer>
      </div>
    </>
  );
}
