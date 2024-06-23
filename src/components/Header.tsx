import React, { FC, ReactElement ,useState, useEffect} from "react";

const Header: FC = (): ReactElement => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Tampilkan header jika user scroll ke atas atau mengarahkan cursor ke atas
            setShowHeader(scrollTop <=20 || scrollTop >0);
        };

        // Tambahkan event listener untuk scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Hapus event listener saat komponen di-unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className="container-fluid" style={{ backgroundColor: "#D6D1CE",position: 'fixed',  top: 0, width: '100%', display: showHeader ? 'block' : 'none'}}>
            <div className="container">
                <div className="row" style={{ textAlign: "center", alignItems: "center" }}>
                    <div className="col-md-4">
                        <h1 style={{ color: "black" ,fontFamily:"fantasy"}}>Ribka Tailor</h1>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-3">
                                <a href="#tentang" style={{ textDecoration: "none" }}>
                                    <p style={{ color: "white", fontStyle: "none", fontSize: "20px" }}>Tentang</p>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="#layanan" style={{ textDecoration: "none" }}>
                                    <p style={{ color: "white", fontStyle: "none", fontSize: "20px" }}>Layanan</p>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="#galeri" style={{ textDecoration: "none" }}>
                                    <p style={{ color: "white", fontStyle: "none", fontSize: "20px" }}>Galeri</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;