import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* <!-- ----------------------------navigation start from here------------------------- --> */}
      <nav className="navbar navbar-expand-md navbar-dark nav-bg-color sticky-top">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            <a className="text-light text-decoration-none fs-3" href="/">
              name
            </a>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  Feedbacks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  Contract
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fs-5" href="/">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- ----------------------------navigation end from here------------------------- --> */}

      {/* <!-- ----------------------------Hero start from here------------------------- --> */}
      <section>
        <img
          className="d-block w-100 h-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU"
          alt=""
        />
      </section>
      {/* <!-- ----------------------------Hero end from here------------------------- --> */}

      {/* <!-- ----------------------------catagory start from here------------------------- --> */}
      <section className="d-lg-flex align-items-lg-center justify-content-center p-5 px-5">
        <div className="d-flex align-items-center p-5">
          <div className="rounded-5 w-50 h-50">
            <img
              className="d-block w-100 rounded-5"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="rounded-end-4 w-50 h-50 bg-dark p-2 py-3">
            <h1 className="fs-2 text-light fw-bold">PHOTO</h1>
          </div>
        </div>
        <div className="d-flex align-items-center p-5">
          <div className="rounded-5 w-50 h-50">
            <img
              className="d-block w-100 rounded-5"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="rounded-end-4 w-50 h-50 bg-dark p-2 py-3">
            <h1 className="fs-2 text-light fw-bold">PHOTO</h1>
          </div>
        </div>
        <div className="d-flex align-items-center p-5">
          <div className="rounded-5 w-50 h-50">
            <img
              className="d-block w-100 rounded-5"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="rounded-end-4 w-50 h-50 bg-dark p-2 py-3">
            <h1 className="fs-2 text-light fw-bold">PHOTO</h1>
          </div>
        </div>
      </section>
      {/* <!-- ----------------------------catagory end from here------------------------- --> */}

      {/* <!-- ----------------------------booking start from here------------------------- --> */}
      <section className="p-4 w-75 m-auto">
        <h1 className="fs-1 text-center form-switch">Booking now</h1>
        <div className="rounded-3 bg-dark d-lg-flex align-lg-content-center">
          <div className="col-lg-6 col-12 margin-value margin-lg-value">
            <img
              className="col-9 col-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcLUO1YT9xjfHdUJXTr3b_vl9bd2R0FIbIA&usqp=CAU"
              alt=""
            />
            <div className="p-5 bg-primary col-9 col-12"></div>
          </div>
          <div className="col-lg-6 col-12 p-4">
            <div className="bg-light d-inline-block p-3 px-5 fw-bolder rounded-2 m-2">
              <div className="d-flex justify-content-center">
                <div className="text-center w-50 fs-4">February</div>
                <div className="text-center w-50 fs-4">2023</div>
              </div>
              {/* <!-- callander start hare --> */}
              <table>
                <thead>
                  <tr>
                    <th className="p-2">S</th>
                    <th className="p-2">M</th>
                    <th className="p-2">T</th>
                    <th className="p-2">W</th>
                    <th className="p-2">T</th>
                    <th className="p-2">F</th>
                    <th className="p-2">S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2"></td>
                    <td className="p-2">1</td>
                    <td className="p-2">2</td>
                  </tr>
                  <tr>
                    <td className="p-2">3</td>
                    <td className="p-2">4</td>
                    <td className="p-2">5</td>
                    <td className="p-2">6</td>
                    <td className="p-2">7</td>
                    <td className="p-2">8</td>
                    <td className="p-2">9</td>
                  </tr>
                  <tr>
                    <td className="p-2">10</td>
                    <td className="p-2">11</td>
                    <td className="p-2">12</td>
                    <td className="p-2">13</td>
                    <td className="p-2">14</td>
                    <td className="p-2">15</td>
                    <td className="p-2">16</td>
                  </tr>
                  <tr>
                    <td className="p-2">17</td>
                    <td className="p-2">18</td>
                    <td className="p-2">19</td>
                    <td className="p-2">20</td>
                    <td className="p-2">21</td>
                    <td className="p-2">22</td>
                    <td className="p-2">23</td>
                  </tr>
                  <tr>
                    <td className="p-2">24</td>
                    <td className="p-2">25</td>
                    <td className="p-2">26</td>
                    <td className="p-2">27</td>
                    <td className="p-2">28</td>
                    <td className="p-2">29</td>
                    <td className="p-2">30</td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- callander end hare --> */}
            </div>
            <div className="text-end px-5">
              <button
                className="d-inline-block mx-5 rounded-1 p-1 px-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ----------------------------booking end from here------------------------- --> */}

      {/* <!-- ----------------------------Product start from here------------------------- --> */}
      <section className="p-lg-5">
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-3">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 1</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-3">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 2</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-3">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 3</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-3">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 4</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-3">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 5</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
        <div className="d-inline-block p-4 col-11 col-lg-3 rounded-4 bg-black m-lg-5 m-4">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
            alt=""
          />
          <h1 className="fs-4 text-light fw-bold">PACKAGE 6</h1>
          <p className="text-light py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            placeat nihil facere distinctio eaque sapiente delectus facilis
            soluta adipisci! Iusto animi, a odit corrupti est asperiores aut rem
            quod iste?
          </p>
        </div>
      </section>
      {/* <!-- ----------------------------Product end from here------------------------- --> */}

      {/* <!-- ----------------------------service start from here------------------------- --> */}
      <section className="p-4 m-5">
        <div className="d-flex align-items-center">
          <div className="col-lg-3 col-12">
            <div className="bg-dark d-inline-block p-2 px-4 text-light fw-bolder text-center rounded-end-5 fs-4">
              OUR SERVICE
            </div>
            <div className="p-2 bg-dark d-inline-block rounded-5"></div>
            <div className="p-2 bg-dark d-inline-block rounded-5"></div>
            <div className="p-2 bg-dark d-inline-block rounded-5"></div>
          </div>
          <div className="p-1 w-75 d-none d-lg-block bg-dark d-inline-block rounded-5"></div>
        </div>
        <div className="p-2 text-center">
          <div className="col-lg-3 col-12 p-4 d-inline-block m-4 text-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmdvgCPkmf54BNkjzQOHChi7nu1AouGJOEQ&usqp=CAU"
              alt="Square Image"
              className="w-25 bg-black"
            />

            <h2 className="inline fs-5">Single Text Area</h2>
            <p className="inline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              obcaecati consequatur repellat distinctio. Sequi iste animi
              molestiae saepe et esse quidem corrupti tempora velit impedit,
              neque, ratione cupiditate non eum!
            </p>
          </div>
          <div className="col-lg-3 col-12 p-4 d-inline-block m-4 text-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmdvgCPkmf54BNkjzQOHChi7nu1AouGJOEQ&usqp=CAU"
              alt="Square Image"
              className="w-25 bg-black"
            />

            <h2 className="inline fs-5">Single Text Area</h2>
            <p className="inline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              obcaecati consequatur repellat distinctio. Sequi iste animi
              molestiae saepe et esse quidem corrupti tempora velit impedit,
              neque, ratione cupiditate non eum!
            </p>
          </div>
          <div className="col-lg-3 col-12 p-4 d-inline-block m-4 text-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmdvgCPkmf54BNkjzQOHChi7nu1AouGJOEQ&usqp=CAU"
              alt="Square Image"
              className="w-25 bg-black"
            />

            <h2 className="inline fs-5">Single Text Area</h2>
            <p className="inline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              obcaecati consequatur repellat distinctio. Sequi iste animi
              molestiae saepe et esse quidem corrupti tempora velit impedit,
              neque, ratione cupiditate non eum!
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            className="fs-3 p-1 px-4 text-decoration-none rounded-3 text-light d-inline-block bg-black"
            href="/"
          >
            More
          </a>
        </div>
      </section>
      {/* <!-- ----------------------------service end from here------------------------- --> */}

      {/* <!-- ----------------------------map start from here------------------------- --> */}
      <section className="w-100 p-5 m-auto d-lg-flex justify-lg-content-center align-lg-content-center">
        <div className="col-lg-6 col-10 m-auto">
          <img
            className="w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYGOqD63Xxa7N75Xq-t1e7xBm8a4DVGDxAA&usqp=CAU"
            alt=""
          />
        </div>

        <div className="col-lg-6 col-12 p-5">
          {/* <iframe
            className="w-100"
            width="400"
            height="300"
            style="border: 0"
            src="https://www.google.com/maps/embed/v1/place?q=24.854656,90.7913406&key=YOUR_API_KEY"
          ></iframe> */}
        </div>
      </section>
      {/* <!-- ----------------------------map end from here------------------------- --> */}

      {/* <!-- ----------------------------footer start from here------------------------- --> */}
      <footer className="bg-dark p-4">
        <ul className="d-flex align-items-center justify-content-center ms-auto mt-2 mt-lg-0">
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              About us
            </a>
          </li>
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              Contract
            </a>
          </li>
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              Menbers
            </a>
          </li>
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              Our plan
            </a>
          </li>
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              Carear
            </a>
          </li>
          <li>
            <a
              className="text-light px-lg-3 px-1 text-decoration-none fs-lg-5 fs-6"
              href="/"
            >
              FAQ
            </a>
          </li>
        </ul>
        <ul className="d-flex align-items-center justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link d-inline-block text-light px-3 fs-5"
              href="/"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-inline-block text-light px-3 fs-5"
              href="/"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-inline-block text-light px-3 fs-5"
              href="/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link d-inline-block text-light px-3 fs-5"
              href="/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
      {/* <!-- ----------------------------footer end from here------------------------- --> */}
    </div>
  );
}

export default App;
