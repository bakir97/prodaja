import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import uploadPicture from "../../../utils/uploadPicture";
import {
  postProizvod,
  errorPostProizvod
} from "../../../redux/actions/proizvodiActions";
import { getOneProizvod } from "../../../redux/actions/oneProizvodAction";
import style from "./style";
import FormItems from "./FormItems";
export class Form extends Component {
  submit = async e => {
    const picturesPromise = this.props.pictures.map(async picture => {
      return uploadPicture(picture, this.props.errorPostProizvod);
    });
    Promise.all(picturesPromise).then(pictures => {
      const podaci = {};
      podaci.id = this.props.id;
      podaci.slike = [...this.props.oldPictures, ...pictures];
      podaci.naslov = e.naslov;
      podaci.cijena = e.cijena;
      podaci.kategorija = e.kategorija;
      podaci.tezina = e.tezina;
      podaci.opis = e.opis;

      this.props.postProizvod(podaci);
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form style={style.form} onSubmit={handleSubmit(this.submit)}>
        <FormItems {...this.props} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  newProizvod: state.proizvodi.newProizvod,
  initialValues: state.proizvodi.oneProizvod,
  loading: state.proizvodi.loading
});

const mapDispatchToProps = {
  postProizvod,
  getOneProizvod,
  errorPostProizvod
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "noviProizvodForm", enableReinitialize: true })(Form));
