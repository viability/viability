<template>
  <form>
    <fieldset>
      <div class="alert alert-dismissible alert-primary" v-show="showAlert">
        <button type="button" class="close" data-dismiss="alert" @click="showAlert=false">&times;</button>
        <i class="mdi mdi-information"></i> {{ languages.classifiesNewProject }}
      </div>

      <div class="form-group">
        <label class="col-form-label col-form-label-lg" for="nameProject">{{ languages.labels.nameProject }}</label>
        <input class="form-control form-control-lg" :placeholder="languages.placeholder.writeNameProject"
               id="nameProject" type="text" :maxlength="languages.labels.length.nameProject" v-model="project.name"
               @keyup="writeProjectName()">
      </div>

      <p class="lead">{{ languages.textView.origin1 }} <strong>{{ languages.textView.origin2 }}</strong> {{ languages.textView.origin3 }}</p>
      <p class="lead">{{ languages.textView.origin4 }}</p>

      <div class="btn-group btn-group-toggle" data-toggle="buttons" id="grp-radio">
        <label class="btn btn-primary" :class="{active: optOri1}" :title="languages.values.origins[0].tooltip">
          <input name="optionsOrigin" id="opt1" autocomplete="off" type="radio" value="1"
                 @click="activateOption(1)" v-model="project.origin" checked>
          {{ languages.values.origins[0].label }}
        </label>
        <label class="btn btn-primary" :class="{active: optOri2}" :title="languages.values.origins[1].tooltip">
          <input name="optionsOrigin" id="opt2" autocomplete="off" type="radio" value="2"
                 @click="activateOption(2)" v-model="project.origin">
          {{ languages.values.origins[1].label }}
        </label>
        <label class="btn btn-primary" :class="{active: optOri3}" :title="languages.values.origins[2].tooltip">
          <input name="optionsOrigin" id="opt3" autocomplete="off" type="radio" value="3"
                 @click="activateOption(3)" v-model="project.origin">
          {{ languages.values.origins[2].label }}
        </label>
        <label class="btn btn-primary" :class="{active: optOri4}" :title="languages.values.origins[3].tooltip">
          <input name="optionsOrigin" id="opt4" autocomplete="off" type="radio" value="4"
                 @click="activateOption(4)" v-model="project.origin">
          {{ languages.values.origins[3].label }}
        </label>
      </div>
      <br/>

      <div class="form-group">
        <label for="descriptionProject">{{ languages.labels.descriptionProject }}</label>
        <textarea class="form-control" id="descriptionProject" :placeholder="languages.placeholder.writeDescriptionProject"
                  rows="3" v-model="project.description"></textarea>
      </div>

      <p class="lead">{{ languages.textView.resumeToClassifier }}</p>
      <p class="lead">{{ languages.textView.interventionCriteria }}</p>
      <div class="grp-select">
        <div class="form-group">
          <label class="col-form-label" for="sectorIntervention">{{ languages.labels.sectorIntervention }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedSector"
                     :options="languages.values.sectorIntervention"
                     v-model="project.sectorIntervention"
                     id="sectorIntervention"></ProSelect>

          ProSelect: {{ project.sectorIntervention }}
        </div>

        <div class="form-group">
          <label class="col-form-label" for="typeActivity">{{ languages.labels.typeActivity }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedTypeActivity"
                     :options="languages.values.typeActivity"
                     id="typeActivity"></ProSelect>
        </div>
      </div>
      <p class="lead">{{ languages.textView.socialIntervention }}</p>
      <div class="grp-select">
        <div class="form-group">
          <label class="col-form-label" for="geographicArea">{{ languages.labels.geographicArea }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedgeographicArea"
                     :options="languages.values.geographicArea"
                     id="geographicArea"></ProSelect>
        </div>
        <div class="form-group">
          <label class="col-form-label" for="socialApproach">{{ languages.labels.socialApproach }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedSocialAppr"
                     :options="languages.values.socialApproach"
                     id="socialApproach"></ProSelect>
        </div>
      </div>
      <p class="lead">{{ languages.textView.withinTheCompany }}</p>
      <div class="grp-select">
        <div class="form-group">
          <label class="col-form-label" for="typeFunction">{{ languages.labels.typeFunctionOnCompany }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedTypeFunction"
                     :options="languages.values.typeFunction"
                     id="typeFunction"></ProSelect>
        </div>
        <div class="form-group">
          <label class="col-form-label" for="relation">{{ languages.labels.relationWithOther }}</label>
          <ProSelect :placeholder="languages.labels.options.selectedRelation"
                     :options="languages.values.relation"
                     id="relation"></ProSelect>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
  import { bus } from "../../main";
  import { instructive } from "../../languages";
  // import { Project } from "../../class/project";
  import ProSelect from "../ProSelect"

  export default {
    name: "ProjectViewData",
    components: {
      ProSelect
    },
    data() {
      return {
        project: {
          name: "",
          origin: 0,
          description: "",
          sectorIntervention: {
            id: 3,
            label: "Servicios",
            icon: "mdi-room-service"
          }

        },
        optOri1: false,
        optOri2: false,
        optOri3: false,
        optOri4: false,
        languages: instructive,
        showAlert: true

      }
    },
    methods: {
      activateOption(opt) {
        switch (opt) {
          case 1:
            this.optOri1 = true;
            this.optOri2 = this.optOri3 = this.optOri4 = false;
            break;
          case 2:
            this.optOri2 = true;
            this.optOri1 = this.optOri3 = this.optOri4 = false;
            break;
          case 3:
            this.optOri3 = true;
            this.optOri2 = this.optOri1 = this.optOri4 = false;
            break;
          case 4:
            this.optOri4 = true;
            this.optOri2 = this.optOri3 = this.optOri1 = false;
            break;
        }
      },
      writeProjectName() {
        bus.$emit('nameProject', this.project.name);
      }
    }
  }
</script>

<style scoped>
  #grp-radio {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 5px;
  }

  .grp-select {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
  }

  @media (max-width: 450px) {
    .grp-select {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
</style>