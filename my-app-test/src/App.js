import "./App.css";
import one from "./images/one.png";
function App() {
  return (
    <div className="App">
      {/* Navbar SECTION  */}
      <section className="navSection" style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/000/830/014/large_2x/futuristic-banner-background-with-wireframe-terrain-vector.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
                height="70"
                alt=""
                loading="lazy"
              />
              <button
                class="navbar-toggler ps-0"
                type="button" s
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
            </div>
            <div class="col-lg-8 nav_bar">
              <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-item nav-link active" href="#">O PRODUKTU</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-item nav-link active" href="#">PREDNOSTI</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link active" href="#">KARAKTERISTIKEPRIMERI UPORABE</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link active" href="#">KONTAKT</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link active" href="#">TRGOVINA</a>
                    </li>
                    <li class="nav-item" aria-current="page">
                      <a href="/en" class="nav-link active">
                        EN
                        {/* <a> |</a> */}
                      </a>
                    </li>
                    <li class="nav-item" aria-current="page">
                      <a href="|" class="nav-link active">
                        |
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="/user" class="nav-link active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* MainText */}
          <div class="row" id="header_text">
            <div className="col-lg-6">
              <h2>VODILNA SVETOVNA REŠITVE</h2>
              <h2>ZA INTEGRIRANO UPRAVLJANJE</h2>
              <h2>TVEGANJ IN PRILOŽNOSTI</h2>
            </div>
            <div class="col use_text">
              <p>UseRisk je osnova za digitalizacijo, avtomatizacijo in dinamično<br />
                prilagajanje procesov upravljanja tveganj v realnem času in vam <br />
                pomaga obvladovati okolje v katerem skorajda več ni<br />
                priložnosti za napake ali neuspehe.</p>
              <button type="button" class="btn btn-info btn-lg">VEČ O PRODUKTU</button>
            </div>
          </div>
        </div>
      </section>

      <section class="prihod_section">
        {/* <!-- services --> */}
        <div class="services">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>USERISK ZA PRIHODNOST
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="bg_full">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 margin_bott">
                      <div id="color_chang" class="services_box">
                        1
                        <figure></figure>
                        <p>Povežite vse podatke na eno točko (API) - SAP, PM IT rešitve, poročila, zunanji podatki.</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 margin_bott">
                      <div id="color_chang" class="services_box">
                        2
                        <figure></figure>
                        <p>Čelni (Front end) prikaz je prilagojen porabniku, nivoju ali potrebi združevanja podatkov. Na enem ekranu enostavno sledite svojim ključnim kazalnikom (KPI), pridobite napredna poročila, sledite opredeljenim tveganjem v realnem času, sprejmite ustrezne korektivne aktivnosti in preglejte analizo P&L.</p>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4">
                      <div id="color_chang" class="services_box">
                        3
                        <figure></figure>
                        <p>Enostavno in hitro vzpostavite katalog tveganj. UseRisk ima integriranih nekaj osnovnih katalogov tveganj (projektno vodenje, finance, investicije,…)  s prednastavljenimi ponderji (utežmi) in korektivnimi ukrepi. Uvoz in izvoz xls preglednic tveganj in ostalih podrobnosti v minuti. </p>
                      </div>
                    </div>
                    {/* <div class="col-xl-4 col-lg-4 col-md-4">
                      <div id="color_chang" class="services_box">
                        <figure>4</figure>
                        <p>Enostavno in hitro vzpostavite katalog tveganj. UseRisk ima integriranih nekaj osnovnih katalogov tveganj (projektno vodenje, finance, investicije,…)  s prednastavljenimi ponderji (utežmi) in korektivnimi ukrepi. Uvoz in izvoz xls preglednic tveganj in ostalih podrobnosti v minuti. </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img_banner2" style={{
          backgroundImage: `url("https://images2.minutemediacdn.com/image/upload/c_crop,h_1969,w_3504,x_0,y_183/v1554921564/shape/mentalfloss/19055-istock-547436912.jpg?itok=JjibHe8y")`,
          height: "90vh",
          backgroundSize: "cover",
        }}>
          <div class="container">

            <div class="row">
              <div class="col-12 col-md-8"></div>
              <div class="col-6 col-md-4"></div>
            </div>


            <div class="row">
              <div class="col-6 col-md-4"></div>
              <div class="col-6 col-md-4"></div>
              <div class="col-6 col-md-4"></div>
            </div>


            <div class="row">
              <div class="col-6"></div>
              <div class="col-6"><h2>SPREMENITE TVEGANJA</h2>
                <h2>V PRILOŽNOSTI IN JIH IZKORISTITE</h2>
                <button type="button" class="btn btn-info btn-lg">KONTAKTIRAJTE NAS</button></div>
            </div>
          </div>
        </div>
      </section >
      {/* end services  */}
    </div >
  );
}

export default App;
