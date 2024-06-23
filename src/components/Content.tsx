import React, { FC, ReactElement } from "react";

const Content: FC = (): ReactElement => {
    return (
        <div className="container-fluid">
            <div id="tentang" className="container" style={{ padding: "20px", marginTop: "50px" }}>
                <h1>Tentang</h1>
                <div className="row">
                    <div className="col-md-6" style={{ padding: "10px" }}>
                        <img src="./ribkaTailor.png" alt="image"
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
                    <div className="row" style={{ marginBottom: "10px" }}>
                        <div className="col-md-3">
                            <img src="./kebaya1.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya2.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya3.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya4.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya5.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya6.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya1.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                        <div className="col-md-3">
                            <img src="./kebaya2.jpeg" style={{ width: "300px", height: "300px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;