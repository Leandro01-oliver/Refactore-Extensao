import { createContext, useState } from 'react'

const ContextGlobal = createContext({})

const ContextGlobalProvider = ({ children }) => {

    const [tipo, setTipo] = useState("");
    const [email, setEmail] = useState("");
    const [perfil,setPerfil] = useState(false);
    const [login,setlogin] = useState(false);
    const [menu,setMenu] = useState(false);
    const [darkMode,setDarkMode] = useState(false);
    const [dropPerfil,setDropPerfil] = useState(false);

    const handlerPerfil = () => setPerfil(!perfil);
    const handlerLogin = () => setlogin(!login);
    const handlerMenu = () => setMenu(!menu);
    const handlerDarkMode = () => setDarkMode(!darkMode);
    const handlerDropPerfil = () => setDropPerfil(!dropPerfil);

    const onChangeTipo = (e) => {
        setTipo(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }


  const value = {
    handlerPerfil,
    perfil,
    handlerLogin,
    login,
    onChangeTipo,
    onChangeEmail,
    tipo,
    email,
    menu,
    handlerMenu,
    darkMode,
    handlerDarkMode,
    handlerDropPerfil,
    dropPerfil
  }

  return (
    <>
      <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
    </>
  )
}

export { ContextGlobal, ContextGlobalProvider }
