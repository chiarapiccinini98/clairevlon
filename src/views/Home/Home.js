import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";


function Home() {
    return (
        <div className={"container-fluid bgdHome d-flex justify-content-center"}>
                <div className={"align-self-center cardHome"}>
                    <h1 className={"titleHome display-1"}> Welcome to Clairevlon</h1>
                    <p className={"mb-1 citHome mt-3 text-center"}> "Joy is the best makeup. <br /> But a little lipstick is a close runner-up."</p>
                    <p className={"subtitleBold text-end"}>  Anne Lamott</p>
                    <div className={"d-flex justify-content-center mt-5"}>
                        <Link
                            to="/makeup"
                            className="btnPrice p-2 text-center"
                        >
                            Discover the products
                        </Link>
                    </div>

                </div>

        </div>
    );
}

export default Home;