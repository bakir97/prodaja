import React, { Component } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getOneProizvod,
  deleteOneProizvod,
  success,
  proizvodToRedux
} from "../../redux/actions/oneProizvodAction";
import { errorPostProizvod } from "../../redux/actions/proizvodiActions";
import AdminButtons from "./AdminButtons";
import MainContent from "./MainContent";
const style = {
  root: {
    minHeight: "calc(100vh - 7rem)",
    marginTop: "7rem",
    padding: "0 10%"
  },
  spinner: { position: "fixed", bottom: "2rem" }
};
class OneProizvod extends Component {
  componentDidMount() {
    this.props.getOneProizvod(this.props.match.params.id);
  }
  componentDidUpdate() {
    if (this.props.successState) {
      this.props.history.push("/");
    }
  }
  componentWillUnmount() {
    this.props.errorPostProizvod(false);
    this.props.success(false);
    this.props.proizvodToRedux({});
  }
  handleDelete = () => {
    this.props.deleteOneProizvod(this.props.match.params.id);
  };
  render() {
    const { proizvod, history, match, loading, admin } = this.props;
    return (
      <Grid
        alignItems="flex-start"
        alignContent="flex-start"
        justify="center"
        container
        style={style.root}
      >
        {Object.keys(proizvod).length > 0 && (
          <>
            <MainContent {...this.props.proizvod} />
            {admin && (
              <AdminButtons
                history={history}
                match={match}
                handleDelete={this.handleDelete}
              />
            )}
          </>
        )}
        {loading && <CircularProgress style={style.spinner} />}
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  admin: state.login.account.isAdmin,
  proizvod: state.proizvodi.oneProizvod,
  loading: state.proizvodi.loading,
  successState: state.proizvodi.success
});

const mapDispatchToProps = {
  getOneProizvod,
  errorPostProizvod,
  deleteOneProizvod,
  success,
  proizvodToRedux
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneProizvod);
