import green from "@material-ui/core/colors/green";
export default theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginRight: 10
  },
  iconButton: { position: "absolute", top: 5, right: 0 }
});
