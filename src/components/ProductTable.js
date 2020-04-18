import React from 'react'
import PropTypes from 'prop-types';

const ProductTable =(products)=>{
  //console.log(products)
    return(
        <div>
        {products.map( item=>{
            return(
                <table style={{ height: '40%', width: '600px', display: 'block' }}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>
                </table>
            );
        })
    }
        </div>
    );
}
ProductTable.propTypes={
    price:PropTypes.number,
    name:PropTypes.string,
    category:PropTypes.string
}

ProductTable.defaultProps = {
  name:  'xxx',
  price:  '000',
  category: 'YYY'
};

export default ProductTable;


