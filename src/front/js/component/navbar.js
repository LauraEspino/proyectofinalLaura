import React, { useState, useEffect, useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [apellidos, setApellidos] = useState("");

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ingresar o Registrarse</button>
  {/* MODAL INICIO SESION / REGISTRO */}

					 <div className="modal"tabIndex="-1" id="exampleModal">

                                  <div className="modal-dialog">
                                      <div className="modal-content fondoModal">
										
										<nav>
                                        	<div className="modal-header nav nav-tabs justify-content-center border-0" id="nav-tab" role="tablist">
												<button type="button" className="nav-link justify-content-center border-0 ms-5 me-5" id="nav-iniciarID-tab" data-bs-toggle="tab" data-bs-target="#nav-inicioSesion"  role="tab" aria-selected="true">Iniciar Sesión</button>
												<button type="button"className="nav-link justify-content-center border-0 ms-5 " id="nav-crearID-tab" data-bs-toggle="tab" data-bs-target="#nav-crearCuenta" role="tab"  aria-selected="false">Registrarse</button>
                                        		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
										</nav>
                                          <div className="modal-body tab-content" id="nav-tabContent">
		{/* SECCION INICIO SESIÓN */}
						
													<form className="tab-pane fade show active container" id="nav-inicioSesion" role="tabpanel" aria-labelledby="nav-iniciarID-tab"  >				
														<div className="form-group">
															<label>Email</label>
															<input
																type="email"
																onChange={e => setEmail(e.target.value)}
																className="form-control"
																placeholder="Ingresa tu correo"
															/>
														</div>
														<div className="form-group">
															<label>Contraseña</label>
															<input
																type="password"
																onChange={e => setPassword(e.target.value)}
																className="form-control"
																placeholder="Ingresa tu contraseña"
															/>
														</div>
														<button className="btn btn-dark mt-2 me-2">Iniciar Sesión</button>
														<button className="btn btn-dark mt-2">Recuperar contraseña</button>
													</form>		
								
									
											  
		{/* SECCION CREAR CUENTA */}									 
									
												<form className="tab-pane fade container" id="nav-crearCuenta" role="tabpanel" aria-labelledby="nav-crearID-tab">					
													<div className="form-group">
													<label>Nombre</label>
														<input
															type="name"
															onChange={e => setName(e.target.value)}
															className="form-control"
															placeholder="Ingresa tu nombre"
														/>
													</div>
													<div className="form-group">
													<label>Apellidos</label>
														<input
															type="apellidos"
															onChange={e => setApellidos(e.target.value)}
															className="form-control"
															placeholder="Ingresa tus apellidos"
														/>
													</div>
													<div className="form-group">
														<label>Email</label>
														<input
															type="email"
															onChange={e => setEmail(e.target.value)}
															className="form-control"
															placeholder="Ingresa tu correo"
														/>
													</div>
													<div className="form-group">
														<label>contraseña</label>
														<input
															type="password"
															onChange={e => setPassword(e.target.value)}
															className="form-control"
															placeholder="Ingresa tu contraseña"
														/>
													</div>
													<button className="btn btn-dark mt-2">Crear cuenta</button>
												</form>
										
							</div>
                                          <div className="modal-footer">
                                              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                  
                                          </div>
                                      </div>
                                  </div>
                              </div>
				</div>
			</div>
		</nav>
	);
};
