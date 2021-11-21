import {AuthenticationStrategy, USER_PROFILE_NOT_FOUND} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors, RedirectRoute, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {resolve} from 'dns';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';





export class EstrategiaAdministrador implements AuthenticationStrategy {
  name: string = 'admin';

  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService

  ) {

  }

  async authenticate(request: Request): Promise<any> {
    let token = parseBearerToken(request);
    if (token) {
      let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
      if (datos) {
        if (datos.data.rol=="admin") {
          let perfil: UserProfile = Object.assign({
            nombre: datos.data.nombre,
            rol: datos.data.rol
          });
          return perfil;

        } else {
          throw new HttpErrors[401]("El token no es valido")
        }
      } else {
        throw new HttpErrors[401]("No se encontraron datos correctos")
      }
    } else {
      throw new HttpErrors[401]("No se ha incluido un token en la solicitud")
    }
  }
}


