import React, { useState, useEffect, useContext } from "react";
import { Login_Registro } from "./login&register";
import { Link , useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Modal = () => {
	const { store, actions } = useContext(Context);
	
    return (
    <div>
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ingresar o Registrarse
  </button> */}
  <div className="modal"tabIndex="-1" id="exampleModal">
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
                              </div>
                          
    )};

