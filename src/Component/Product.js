import React, {Component} from 'react';

class Product extends Component {

    // constructor(props)
    // {
    //     super(props);
    //     this.onAddtoCart = this.onAddtoCart.bind(this);
    // }

    onAddtoCart = () => {
        alert(this.props.name);
    }
	render(){
  	return (
        <div>
            <div className="card text-center bg text-secondary">
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.price}</p>
                <a className="btn btn-dark" onClick={ this.onAddtoCart }>Mua ngay</a>
              </div>
            </div>
        </div>
  );
  };
}

export default Product;
