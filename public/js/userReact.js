class Nickname extends React.Component{
      constructor(props){
             super(props)
             this.state = {n:'登陆'}
    }
      componentDidMount(){
              this.request = $.get(this.props.url,function(data){
                      console.log(data);
                    this.setState({n:data.nickname})
                  
              }.bind(this))
      }
      componentWillUnmount(){
        this.request.abort();
      }

      render(){
        return(
              <div>
                    <a href="login.html">
                           {this.state.n}
                    </a>
                  
              </div>
          )
      }
}
ReactDOM.render(
  <Nickname url="/user/info"/>,
  document.getElementById('yonghu')
  )