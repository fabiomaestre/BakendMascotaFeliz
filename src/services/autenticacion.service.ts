import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Cliente} from '../models';
import {ClienteRepository} from '../repositories';
import {Llaves} from '../config/Llaves';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt=require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository : ClienteRepository
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

  IdentificarCliente(usuario: string, contrasena: string){
    try{
      let p = this.clienteRepository.findOne({where: {correo: usuario, contrasena: contrasena}});
      if(p){
        return p;
      }
      return false;
      }catch{
      return false;
      }
  }

  GenerarTokenJWT(cliente: Cliente){
    let token = jwt.sign({
      data:{
        idCliente: cliente.idCliente,
        correo: cliente.correo,
        nombre: cliente.nombre +" "+cliente.apellido
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
