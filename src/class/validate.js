/*
 * Copyright (c) 2018. Mario Torres es.. ¡Un orgullo Nicaragüense!
 */
import { message } from "../languages";

export class Validate {
  /**
   * Constructor de la clase.
   * @param name :: Nombre del campo a validar.
   * @param value :: Valor del campo a validar.
   * @param type :: Reglas de validaciòn { typeof: 'Tipo de variable', length: 'longitud' }
   */
  constructor(name, value, type) {
    this._name = name;
    this._value = value;
    this._type = type;
  }

  training() {
    // eslint-disable-next-line
    let name = this._name;
    var failed = true;
    var error = "";

    if (this._value == null) {
      error = message.errorMessage.failValueNull;
    } else {

      if (typeof this._type === 'object') {
        switch (this._type.typeof) {
          case 'String':
            if (typeof this._value !== 'string')
              error = message.errorMessage.failTypeValue;

            else if (this._value.length <= 0)
              error = message.errorMessage.failValueEmpty;

            else if (this._value.length > this._type.lengthTo) {
              // eslint-disable-next-line
              let length = this._type.lengthTo;
              error = message.errorMessage.failValueLength;
            } else
              failed = false;

            break;

          case 'Uuid':
            if (this._value.length > 36)
              error = message.errorMessage.failValueUuid;
            else
              failed = false;

            break;
        }
      }
    }

    return { sucess: !failed, msg: error };
  }
}