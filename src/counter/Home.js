import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Cards from '../Components/Card.js';
import '../Components/Card.css';
import Subtitle from '../Components/Subtitle';
import './Home.css';
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Subtitle />
        <Container>
          <div className="container-fluid">
            <Cards
              gambar="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
              title="Kajian Koding #3"
              text="ReactJS dan Firebase Auth/Hosting"
            />

            <Cards
              gambar="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
              title="kajian koding #2"
              text="html,css,boostrap dasar"
            />

            <Cards
              gambar="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
              title="kajian koding #1"
              text="Belajar Laravel Dasar"
            />
          </div>
        </Container>
        <div className="text-center m-4">
          <button class="btn btn-outline-success">
            Lihat Seluruh Kajian Koding
          </button>
        </div>
        <hr />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 bg-success pt-4">
              <h4>Kegiatan</h4>
              <br />
              <p>Koding</p>
              <p>Belajar Agama dan Al Qur'an</p>
              <p> Pendidikan Karakter</p>
            </div>
            <div className="col-md-5 pt-4">
              <img
                height="70px"
                width="100px"
                src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc"
                alt=""
                srcset=""
              />
              <br />
              <h4>"Memberi Manfaat Untuk Ummat"</h4>
              <br />
              <p>-Santren Koding-</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
