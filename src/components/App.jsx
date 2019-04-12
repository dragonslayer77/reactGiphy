import React, {Fragment, Component} from 'react';
import SelectedGif from "./SelectedGif";
import GifList from "./GifList";
import { RaceSubscriber } from 'rxjs/internal/observable/race';



const gifs = [
     'https://media.giphy.com/media/ofiR5h351IjCM/giphy.gif',
     'https://media.giphy.com/media/r61MFCaUdOCaY/giphy.gif',
     'https://media.giphy.com/media/B7THERk7bIpnq/giphy.gif',
     'https://media.giphy.com/media/pGTq40UyOPK48/giphy.gif'
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedGif:'https://media.giphy.com/media/ofiR5h351IjCM/giphy.gif',

        }
    }
    render(){
        return (
            <Fragment>
                <SelectedGif />
                <GifList gifs={gifs}/>
            </Fragment>
        );
    }
        
};

export default App;

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<App />, root);
// }
