
import React from 'react';


class GlobalFooter extends React.Component {
    render() {
    return (
    <div >

{this.props.name}
    <footer className="bg-light text-dark">

    <p className="text-center">
Footer text

    </p>

    </footer>

</div>
    
    );
    }
    }
    export default GlobalFooter;