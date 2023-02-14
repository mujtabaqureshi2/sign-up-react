import "./login.css";
import img from '../assests/image.png'
import { useState } from "react";



const Login = () => {
    // States to control form Validation
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredRepeatEmail, setEnteredRepeatEmail] = useState('');
    const [repeatEmailIsValid, setRepeatEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const validEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    const repeatEmailHandler = (event) => {
        setEnteredRepeatEmail(event.target.value)
    };

    const validRepeatEmailHandler = (event) => {
        setRepeatEmailIsValid(enteredRepeatEmail === enteredEmail && enteredRepeatEmail.includes('@'));
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const validPasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    // End states section

    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md"

                > <img src={img} className="mx-auto h-12 w-auto" alt="img" />
                    <h2 className=" mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Criar nova conta
                    </h2>
                    <p className="mt-2 mb-0 text-center text-base leading-5 text-gray-600">
                        <span>Ou </span>

                        <a href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            entrar na sua conta existente
                        </a>
                    </p>
                </div>


                <div className="mt-8 px-4 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8  shadow sm:rounded-lg sm:px-10">
                        <div><label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                            E-mail
                        </label>
                            <div> <input type="text" name="null"
                                value={enteredEmail}
                                onChange={emailChangeHandler}
                                onBlur={validEmailHandler}
                                className={`${"form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"} ${emailIsValid === false ? "border-red-500 " : ''} `} />
                            </div>
                            {emailIsValid === false && <span className="text-xs text-red-500"> Esse campo é obrigatório</span>}
                        </div>
                        <div className="mt-6"><label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                            <font >
                                <font >
                                    Repetir e-mail
                                </font>
                            </font>
                        </label>
                            <div><input type="email" name="null"
                                value={enteredRepeatEmail}
                                onChange={repeatEmailHandler}
                                onBlur={validRepeatEmailHandler}
                                className={`${"form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"} ${repeatEmailIsValid === false ? "border-red-500 " : ''} `} />
                            </div>
                            {repeatEmailIsValid === false && <span className="text-xs text-red-500">
                                Os dois e-mails devem ser iguais.<br></br>Esse campo é obrigatório </span>}
                        </div>
                        <div className="mt-6"><label className="block text-sm font-medium leading-5 text-gray-700">
                            <font >
                                <font >
                                    Senha
                                </font>
                            </font>
                        </label>
                            <div> <input type="password" name="null" value={enteredPassword} onChange={passwordChangeHandler}
                                onBlur={validPasswordHandler}
                                className={`${"form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"} ${passwordIsValid === false ? "border-red-500 " : ''} `} />
                            </div>
                            {passwordIsValid === false && <span className="text-xs text-red-500"> Esse campo é obrigatório</span>}


                        </div>
                        <div className="mt-6"><label className="relative flex items-start mt-2">
                            <div className="flex items-center h-5"><input type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                            </div>
                            <div className="ml-2 text-sm leading-5"><span className="font-medium text-gray-700 pa-1">
                                <span> </span> Eu li e aceito os




                                <a href="https://kiwify.com.br/termos-de-uso"
                                    className="underline">
                                    <font>
                                        <font> termos</font>
                                    </font>
                                </a>
                                <font>
                                    <font > de uso , </font>
                                </font><a href="https://kiwify.com.br/licenca-de-uso-software"
                                    className="underline">
                                    <font>
                                        <font >termos de  licença de uso de software</font>
                                    </font>
                                </a>
                                <font>
                                    <font > , </font>
                                </font><a href="https://kiwify.com.br/politica-de-conteudo"
                                    className="underline">
                                    <font >
                                        <font>conteúdo da Kiwify
                                        </font>
                                    </font>
                                </a>
                                <font></font>
                            </span> </div>
                        </label></div>
                        <div className="mt-6"><span className="block w-full rounded-md shadow-sm">
                            <button
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <font >
                                    <font >Criar conta
                                    </font>
                                </font>
                            </button></span></div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Login;