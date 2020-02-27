class App extends Component {

    componentDidMount() {
    }
  
    render() {
      return (
        <Router>
          <div className="App">
            <Header />
            <Nav />
            <Route path="/" component={Dashboard} />
            <Route path="/manage" component={ManageOwners} />
          </div>
        </Router>
      )
    }
  }
  
  const putStateOnProps = (reduxState) => {
    return (
      {
        reduxState
      }
    )
  }
  
  export default connect(putStateOnProps)(App);