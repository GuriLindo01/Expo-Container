import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./Componentes/Titulo";
import Saudacao from "./Componentes/Saudacao";
import FotoPerfil from "./Componentes/FotoPerfil";
import CartaoUsuario from "./Componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Gdrake' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Robinho'
      descricao='progamador'
      img='perfil00'
    />

     <CartaoUsuario
      nome='Leila Pereira'
      descricao='Gestora'
      img='perfil01'
    />

     <CartaoUsuario
      nome='Marinha'
      descricao='Chefe da milícia'
      img='perfil02'
    />
    
     <CartaoUsuario
      nome='Endrick'
      descricao='Jogador de futebol'
      img='perfil03'
    />

     <CartaoUsuario
      nome='Yuri Alberto'
      descricao='Finge ser jogador'
      img='perfil04'
    />
  </ScrollView>


}
