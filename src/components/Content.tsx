import React, { FC, ReactElement ,useState,useEffect} from "react";

const Content: FC = (): ReactElement => {
    const images = [
        'kebaya1.jpeg',
        'kebaya2.jpeg',
        'kebaya3.jpeg',
        'kebaya4.jpeg',
        'kebaya5.jpeg',
        'kebaya6.jpeg',
        'kebaya1.jpeg',
        'kebaya2.jpeg'
    ];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="container-fluid">
            <div id="tentang" className="container" style={{ padding: "20px", marginTop: "50px" }}>
                <h1>Tentang</h1>
                <div className="row">
                    <div className="col-md-6" style={{ padding: "10px" }}>
                        <img src={process.env.PUBLIC_URL + '/ribkaTailor.png'} alt="image"
                            style={{ width: "400px", height: "400px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)", mixBlendMode: "normal" }}
                        />
                    </div>
                    <div className="col-md-6" style={{ padding: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio, quas, ullam laboriosam alias ex maxime placeat illum iure error beatae molestias ab vel nobis? Tempora laudantium repudiandae neque rem.
                        <p>
                            <button className="btn btn-primary">Pesan Sekarang</button>
                        </p>
                    </div>
                </div>
            </div>
            <div id="layanan" style={{ backgroundColor: "#eeee" }}>
                <div className="container" style={{ padding: "20px" }}>
                    <h1>Layanan</h1>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illum distinctio et laudantium, delectus atque sapiente optio excepturi officia ipsum. Maiores maxime sit non excepturi distinctio, eligendi dolore facilis!
                        </li>
                    </ul>
                </div>
            </div>
            <div id="galeri" style={{ backgroundColor: "#eeee" }}>
                <div className="container" style={{ padding: "20px" }}>
                    <h1>Galeri</h1>
                    {isMobile ? (
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {images.map((_, index) => (
                                    <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                                ))}
                            </ol>
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/' + image}
                                            className="d-block w-100"
                                            style={{ height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    ) : (
                        <div className="row" style={{ marginBottom: "10px" }}>
                            {images.map((image, index) => (
                                <div key={index} className="col-md-3">
                                    <img
                                        src={process.env.PUBLIC_URL + '/' + image}
                                        style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}
                                        alt={`Galeri ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Content;