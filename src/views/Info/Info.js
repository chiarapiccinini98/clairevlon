import React from "react";
import scren from "../../assets/Images/screenCartelle.png"
import screenComponent from "../../assets/Images/screencomponenti.png"

function Info () {
    return (
        <div className={"container-fluid"}>
            <div className={"row justify-content-center mt-5"}>
                <div className={"col-12 col-lg-6"}>
                    <h1 className={"display-2 titleHome"}> What is CLAIREvlon? </h1>
                    <p className={""}> CLAIREvlon è un'applicazione web sviluppata con React.js per un progetto universitario.
                        I dati relativi ai prodotti Revlon sono stati ottenuti tramite una free API <a id={"link"} href={"https://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon"}>
                             "Make Up API".</a>
                    </p>

                </div>

            </div>
            <div className={"row justify-content-center mt-md-5 ms-1 ms-lg-4 me-1 me-lg-4"}>
                <h2 className={"textpurple ms-lg-5"}> Com'è strutturata l'applicazione React:</h2>
                <div className={"col-12 col-lg-5 mt-3 cardInfo"}>
                    <h3 className={"textdark"}> Cartelle </h3>
                    <p> L'applicazione è composta da 4 cartelle principali:</p>
                    <ul>
                        <li>
                            <strong>app</strong>: contiene il file App.js da cui si inizia a sviluppare l'applicazione
                        </li>
                        <li>
                            <strong>assets</strong>: contiene tutte le immagini e le icone utilizzate per
                            la realizzazione del'applicazione
                        </li>
                        <li>
                            <strong>components</strong>: include i vari componenti
                            dell'app ovvero
                            <ul>
                                <li>Footer e Header</li>
                                <li>MainTemplate</li>
                                <li>ProductCard: struttura le card che verranno utilizzate per mostrare i prodotti</li>
                                <li>ProductCardGrids: per visualizzare le card in formato griglia</li>
                                <li>ProductTable: per visualizzare i prodotti in formato tabella</li>
                            </ul>
                        </li>
                        <li>
                            <strong>views</strong>: racchiude le pagine principali dell'applicazione tra cui Home, Make Up, Info
                            e la pagina per visualizzare in dettaglio un prodotto specifico
                        </li>

                    </ul>
                    <img className={"p-3"} src={scren} alt={"screen cartelle progetto"}/>

                </div>
                <div className={"col-12 col-lg-5 mt-3 cardInfo"}>
                    <h3 className={"textdark"}> Componenti </h3>
                    <p> Per questa applicazione sono stati creati 6 componenti:</p>
                    <table className="table table-bordered mt-4">
                        <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Chiamato da</th>
                        </tr>
                        </thead>
                        <tbody className={"textgrey"}>
                        <tr>
                            <td>MainTemplate</td>
                            <td>App.js</td>
                        </tr>
                        <tr>
                            <td>Header <br/> Footer</td>
                            <td>MainTemplate</td>
                        </tr>
                        <tr>
                            <td>ProductCard</td>
                            <td>ProductCardGrids</td>
                        </tr>
                        <tr>
                            <td>ProductCardGrids</td>
                            <td>MakeUp <br/> MakeUpDetail</td>
                        </tr>
                        <tr>
                            <td>ProductTable</td>
                            <td>MakeUp</td>
                        </tr>
                        </tbody>
                    </table>
                    <img className={"p-3 mt-4"} src={screenComponent} alt={"screen cartelle progetto"}/>
                </div>

            </div>



        </div>
    )
}

export default Info;