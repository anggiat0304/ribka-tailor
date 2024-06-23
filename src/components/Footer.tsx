import React ,{FC,  ReactElement } from "react";

const Footer : FC = (): ReactElement=>{
        return (
            <div style={{backgroundColor:"#8A8582",padding:"50px"}}>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Kontak</h3>
                            <ul>
                                <li style={{textDecoration:"none",listStyle:"none"}}><img src={process.env.PUBLIC_URL + '/whatsapp.png'}  style={{width:"30px"}}/> 082272310957</li>
                                <li style={{textDecoration:"none",listStyle:"none"}}><img src={process.env.PUBLIC_URL + '/instagram.png'} style={{width:"30px"}}/> <a href="https://www.instagram.com/ribka.pangaribuan.96/" style={{textDecoration:"none",color:"black"}}>ribka.pangaribuan.96</a></li>
                            </ul>
                            <h3>Alamat</h3>
                            <ul>
                                <li style={{textDecoration:"none",listStyle:"none"}}>
                                    <a href="https://www.google.com/maps/place/Tugu+Toga+Raja+Pangaribuan/@2.380485,99.147825,19z/data=!4m6!3m5!1s0x302e01f4b8766167:0x80fde90421fa9b8c!8m2!3d2.3810573!4d99.1476309!16s%2Fg%2F11jfft9g5k?hl=en-US&entry=ttu" style={{color:"black", textDecoration:"none"}}>
                                    
                                    Jl.Tugu Pangaribuan desa Sitoluama Kec Laguboti , Kab Toba Samaosir
                                    </a>
                                    </li>
                            </ul>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Footer;