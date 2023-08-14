import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login_Registro = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 modal"tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <ul className="nav justify-content-center nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Iniciar sesión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Crear una nueva cuenta</a>
                            </li>
                        </ul>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
		</div>
    
        // <div className="modal" tabIndex="-1">
        // <div className="modal-dialog">
        //     <div className="modal-content">
        //     <div className="modal-header">
        //         <h5 className="modal-title">Modal title</h5>
        //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //     </div>
        //     <div className="modal-body">
        //         <p>Modal body text goes here.</p>
        //     </div>
        //     <div className="modal-footer">
        //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" className="btn btn-primary">Save changes</button>
        //     </div>
        //     </div>
        // </div>
        // </div>
	);
};
