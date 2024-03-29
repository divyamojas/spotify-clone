import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=05626fa4f1db44f8b0c2ae13161e8d36&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a
        className="btn btn-success btn-lg"
        style={{ borderRadius: "2rem" }}
        href={AUTH_URL}
      >
        Login with Spotify
      </a>
    </Container>
  );
}
