export default function MainHeader() {
  return (
    <div className="container">
      <svg width={200} height={320} xmlns="http://www.w3.org/2000/svg">
        <line className="top" x1="0" y1="0" x2="600" y2="0" />
        <line className="left" x1="0" y1="320" x2="0" y2="-620" />
        <line className="bottom" x1="200" y1="320" x2="-620" y2="320" />
        <line className="right" x1="200" y1="0" x2="200" y2="320" />
      </svg>
      <div className="info">
        <h1 className="info__name">Maximiliano Vilchez</h1>
        <h3 className="info__profession">Frontend Developer</h3>
      </div>
      <div className="contact">
        <p className="contact__email">max.vilchz@gmail.com</p>
        <p className="contact__phone">(+51) 928284288</p>
        <p className="contact__address">
          Mz A LT 12 calle césar vallejo, con av. la unión, Tablada de Lurín,
          VMT
        </p>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          width: 600px;
          overflow: hidden;
          height: 320px;
          background: #fff;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
        }
        svg line {
          stroke-width: 2;
          stroke: #000;
          fill: none;
          stroke-dasharray: 320;
          -webkit-transition: -webkit-transform 0.6s ease-out;
          transition: transform 0.6s ease-out;
        }
        h1,
        h3 {
          margin: 0;
          width: 100%;
        }
        .info {
          position: absolute;
          top: 20px;
          left: 50px;
          background-color: #ffffff;
          z-index: 9;
          width: 60%;
          padding: 20px 0;
        }
        .info__name {
          font-size: 3rem;
          text-transform: uppercase;
        }
        .info__profession {
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: 300;
        }
        .contact {
          position: absolute;
          bottom: 0px;
          left: 220px;
          background-color: #ffffff;
          text-align: left;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact__email,
        .contact__phone {
          font-weight: bold;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
