

const Cart = () =>{
    return(
        <>
        <section className="section cartPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <h2 className="hd mb-0">Your Cart</h2>
                        <p>There are <b>3</b> products on your cart.</p>
          
                     <div  className="table-responsive">
                     <table className="table">
                       <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
          
          
          
            </div>
        </section>
        
        </>

    )
}

export default Cart;