import React, { Component } from "react";
import { connect } from "react-redux";
import TextAreaComponent from "../../Layout/FormElements/TextArea";
import SelectComponent from "../../Layout/FormElements/Select";
import TextComponent from "../../Layout/FormElements/Text";
import { Grid, Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import uploadPicture from "../../utils/uploadPicture";
import { postProizvod } from "../../redux/actions/proizvodiActions";
import { getOneProizvod } from "../../redux/actions/oneProizvodAction";
import CircularProgress from "@material-ui/core/CircularProgress";
const style = {
  button: {
    fontFamily: "Kalam",
    paddingBottom: 3,
    fontSize: 20,
    marginTop: 20
  },
  form: { width: "100%", maxWidth: 600, margin: 10 }
};
export class Form extends Component {
  submit = async e => {
    const picturesPromise = this.props.pictures.map(async picture => {
      return uploadPicture(picture);
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
  fields = (type, name, label) => {
    return (
      <Field type={type} name={name} label={label} component={TextComponent} />
    );
  };
  selectField = () => (
    <Field
      labelText="Izaberi kategoriju"
      type="select"
      name="kategorija"
      elementi={["suplementi", "hrana", "ostalo"]}
      component={SelectComponent}
      label="Favorite Color"
    />
  );
  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <form style={style.form} onSubmit={handleSubmit(this.submit)}>
        <Grid item xs={12} container justify="center">
          {this.fields("text", "naslov", "Naslov")}
          <Field type="text" name="opis" component={TextAreaComponent} />
          {this.selectField()}
          <Grid item xs={6} style={{ paddingRight: 5 }}>
            {this.fields("number", "tezina", "Tezina")}
          </Grid>
          <Grid style={{ paddingLeft: 5 }} item xs={6}>
            {this.fields("number", "cijena", "Cijena")}
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" style={style.button}>
              Objavi Proizvod
            </Button>
          )}
        </Grid>
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
  getOneProizvod
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "noviProizvodForm", enableReinitialize: true })(Form));
