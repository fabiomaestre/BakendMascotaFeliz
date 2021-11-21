import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Persona} from '../models';
import {PersonaRepository} from '../repositories';
import {Llaves} from '../config/Llaves';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt=require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PersonaRepository)
    public personaRepository : PersonaRepository
  ) { }

  /*
   * Add service methods here
   */

  GenerarContrasena() {
    let contrasena = generador(8, false);
    return contrasena;
  }

  CifrarContrasena(contrasena: string) {
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    return contrasenaCifrada;
  }

  IdentificarPersona(usuario: string, contrasena: string){
    try{
      let p = this.personaRepository.findOne({where: {correo: usuario, contrasena: contrasena}});
      if(p){
        return p;
      }
      return false;
      }catch{
      return false;
      }
  }

  GenerarTokenJWT(persona: Persona){
    let token = jwt.sign({
      data:{
        idPersona: persona.idPersona,
        correo: persona.correo,
        nombre: persona.nombre +" "+persona.apellido,
        rol: persona.rol
      }
    },
    Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }

  }
}


