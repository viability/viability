/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import { instructive } from "../languages";
import { Validate } from "./validate";

export class Project {
  /**
   * Aquí definimos el constructor de nuestra clase Project
   * @param name :: Nombre del proyecto.
   * @param originId :: Identificador único del resultado esperado del proyecto.
   * @param description :: Descripciòn del proyecto.
   * @param sectorInterventionId :: Identificador único del sector de intervención.
   * @param typeActivityId :: Identificador único del tipo de actividad.
   * @param geographicAreaId :: Identificador único del area geografica o alcance del proyecto.
   * @param socialApproachId :: Identificador único del enfoque social.
   * @param typeFunctionId :: Identificador único del tipo de funciòn del proyecto.
   * @param relationId :: Identificador único de la relaciòn con otros proyectos.
   */
  constructor(name, originId, description, sectorInterventionId, typeActivityId,
              geographicAreaId, socialApproachId, typeFunctionId, relationId) {

    this._name = name;
    this._originId = originId;
    this._description = description;
    this._sectorInterventionId = sectorInterventionId;
    this._typeActivityId = typeActivityId;
    this._geographicAreaId = geographicAreaId;
    this._socialApproachId = socialApproachId;
    this._typeFunctionId = typeFunctionId;
    this._relationId = relationId;
  }

  listValidate() {
    return [
      {
        label: instructive.labels.nameProject,
        value: this._name,
        typeof: instructive.typeof.string,
        length: instructive.labels.length.nameProject
      },
      {
        label: instructive.labels.sectorIntervention,
        value: this._sectorInterventionId,
        typeof: instructive.typeof.uuid,
        length: null
      },
      {
        label: instructive.labels.typeActivity,
        value: this._typeActivityId,
        typeof: instructive.typeof.uuid,
        length: null
      },

    ]
  }

  validate() {
    return this.listValidate()
               .map(l => new Validate(l.label, l.value, { typeof: l.typeof, length: l.length }).training())
               .filter(v => !v.sucess);
  }


  get name() {
    return this._name;
  }

  get originId() {
    return this._originId;
  }

  get description() {
    return this._description;
  }

  get sectorInterventionId() {
    return this._sectorInterventionId;
  }

  get typeActivityId() {
    return this._typeActivityId;
  }

  get geographicAreaId() {
    return this._geographicAreaId;
  }

  get socialApproachId() {
    return this._socialApproachId;
  }

  get typeFunctionId() {
    return this._typeFunctionId;
  }

  get relationId() {
    return this._relationId;
  }

}