// import HomePage from './HomePage';

// const mapDispatchToProps = (dispatch) => ({
//   onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//   onSubmitForm: (evt) => {
//     if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//     dispatch(loadRepos());
//   }
// });

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError()
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

// export default compose(withReducer, withSaga, withConnect)(HomePage);
// export default compose(withReducer, withSaga, withConnect)(HomePage);
// export { mapDispatchToProps };

export { default } from './HomePage';
