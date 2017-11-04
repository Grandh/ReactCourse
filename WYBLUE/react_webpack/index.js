
class Test extends React.Component{
    constructor(...args){
        super(...args);
        this.state={value:""};
    }

    fn(ev){
        setState({
            value:ev.target.value
        });
    }
    render(){
        return <div>
            <input type="text"  onChange={this.fn.bind(this)}/>
            <span>{this.state.value}</span>
            </div>;
    }
}