import React from 'react'

export default function Form(props) {
    return (
        <div className="container">
            <form className="my-5"  onSubmit={props.getData} >
                <div className="row">
                    <div className="col-md-4">
                        <input type="text"  placeholder="City" className="form-control" name="city" autocompleet="off" />
                    </div>

                    <div className="col-md-4">
                        <input type="text" placeholder="Country" className="form-control" name="country" autocompleet="off" />
                    </div>

                    <div className="col-md-4">
                        <button className="btn btn-warning btn-block" type="submit"> Get Weather </button>
                    </div>

                </div>
            </form>
        </div>
    )
}
