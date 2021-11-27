import React from "react";

function Footer() {
    return (
        <>
            <div className="d-flex flex-column b-0" style={{
                position: "absolute",
                bottom: "0",
                width: "100%"
            }}>
                <div className="wrapper flex-grow-1"></div>
                <footer className="bg-dark">
                    <div className="container mt-auto">
                        <span className="text-muted">
                            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                                <div className="col-md-4 d-flex align-items-center">
                                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                                    </a>
                                    <span className="text-muted">© 2021 Prashant, Sah</span>
                                </div>

                                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                    <li className="ms-3"><a className="text-muted" href="https://twitter.com/prashan37149576" target="_blank"><svg className="bi" width="24" height="24"></svg>Twitter</a></li>
                                    <li className="ms-3"><a className="text-muted" href="https://github.com/prashantsah567" target="_blank"><svg className="bi" width="24" height="24"></svg>Github</a></li>
                                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/prashant-sah-8621b419a/" target="_blank"><svg className="bi" width="24" height="24"></svg>Linkedin</a></li>
                                </ul>
                            </footer>
                        </span>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;