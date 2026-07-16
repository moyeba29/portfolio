export default function AboutPage() {
  return (
    <div className="container-global">
      <div className="colonne-page">
        <h2 className="titre-colonne">Portfolio About Page</h2>
        
        <div className="page-rendu">
          <header className="entete">
            <span className="logo-site">
              <a href="/" className="lien-logo">ma.</a>
            </span>
            <ul className="menu-navigation">
              <li><a href="/">Work</a></li>
              <li><a href="/about" className="actif">About</a></li>
              <li><a href="#">Playground</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </header>

          <div className="section-hero">
            <div className="hero-gauche">
              <h1 className="titre-about">
                Hi I'm Mehmet Akif Karasu, 3D artist & sculptor.
              </h1>
              <p className="paragraphe-about">
                My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
              </p>
              <p className="paragraphe-about">
                Now I'm an interactive media design student in Istanbul — currently freelancing and seeking internship opportunities.
              </p>
            </div>
            <div className="zone-image-portrait">
              <img src="/about.png" alt="Mehmet Akif Karasu" className="image-portrait" />
            </div>
          </div>

          <div className="zone-competences">
            <div className="ligne-competence">
              <span className="label-competence">Main Software</span>
              <div className="liste-items">
                <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Fargor</p>
                <p>Adobe CC, Figma, Ableton</p>
              </div>
            </div>
            <div className="ligne-competence">
              <span className="label-competence">Main Skills</span>
              <div className="liste-items">
                <p>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Illustration, Sound Design</p>
              </div>
            </div>
          </div>

          <div className="barre-separation"></div>

          <div className="zone-contact">
            <div className="contact-gauche">
              <p className="texte-accroche">
                I am thrilled to answer to <br />
                your next project →
              </p>
            </div>
            <div className="contact-droite">
              <p className="email-contact">makifkarasu@outlook.com</p>
              <span className="lien-cv">View Resume</span>
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