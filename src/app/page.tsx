export default function WorkPage() {
  return (
    <div className="container-global">
      <div className="colonne-page">
        <h2 className="titre-colonne">Portfolio-Work Page</h2>
        
        <div className="page-rendu">
          <header className="entete">
            <span className="logo-site">
              <a href="/" className="lien-logo">ma.</a>
            </span>
            <ul className="menu-navigation">
              <li><a href="/" className="actif">Work</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#">Playground</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </header>

          <div className="introduction-work">
            <div className="intro-gauche-work">
              <h1>
                Hello, I’m <br />
                Mehmet Akif.
              </h1>
              <span className="icone-fleche-bas">↓</span>
            </div>
            <div className="intro-droite-work">
              <p>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
            </div>
          </div>

          <div className="liste-projets">
            <div className="bloc-projet">
              <div className="projet-gauche">
                <div>
                  <h3 className="projet-numero-titre">01 / PROJECT NAME</h3>
                  <p className="projet-description">
                    Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
                  </p>
                </div>
                <div>
                  <p className="projet-details-techniques">
                    Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.
                  </p>
                  <a href="#" className="projet-lien-action">More shots from this project ↗</a>
                </div>
              </div>
              <div className="projet-droite-image">
                <div className="carre-gris-projet"></div>
              </div>
            </div>

            <div className="bloc-projet">
              <div className="projet-gauche">
                <div>
                  <h3 className="projet-numero-titre">02 / PROJECT NAME</h3>
                  <p className="projet-description">
                    Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
                  </p>
                </div>
                <div>
                  <a href="#" className="projet-lien-action">See case study →</a>
                </div>
              </div>
              <div className="projet-droite-image">
                <div className="carre-gris-projet"></div>
              </div>
            </div>

            <div className="bloc-projet">
              <div className="projet-gauche">
                <div>
                  <h3 className="projet-numero-titre">03 / PROJECT NAME</h3>
                  <p className="projet-description">
                    Experimental creature modeling for school project.
                  </p>
                </div>
                <div>
                  <a href="#" className="projet-lien-action">Project WIP</a>
                </div>
              </div>
              <div className="projet-droite-image">
                <div className="carre-gris-projet"></div>
              </div>
            </div>
          </div>

          <footer className="pied-page">
            <span className="copyright-bleu">Mehmet Akif Karasu — 2020</span>
            <div className="liens-reseaux">
              <span>Artstation</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}