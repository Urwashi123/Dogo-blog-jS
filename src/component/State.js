import {Component} from 'react';
class Stateex extends Component
{
    constructor (props)
    {
super(props);
this.state = {
    count: 0
};
}
render()
{
    return(
        <div>
            <p>This is from example</p>
            <p>You clicked  {this.state.count} times</p>
            <button
            onClick={ () =>
                this.setState({ count: this.state.count +1})}>
                    Click me
                </button>
         </div>
    );

}
}
export default Stateex