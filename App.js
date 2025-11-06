import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./Componentes/Titulo";
import Saudacao from "./Componentes/Saudacao";
import FotoPerfil from "./Componentes/FotoPerfil";
import CartaoUsuario from "./Componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Plk' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Plk'
      descricao='progamador'
      img='perfil00'
    />
  </ScrollView>


}
