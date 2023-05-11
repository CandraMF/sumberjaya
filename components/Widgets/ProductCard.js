
import Link from "next/dist/client/link"
import { Component } from "react"

export default class ProductCard extends Component{
    render() {
        return (
            <>
                <div className="w-full hover:-mt-4 lg:w-4/12 p-5 cursor-pointer ease-linear transition-all duration-150">
                    <Link href="#">
                        <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                            <img
                                alt="..."
                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                src={'/img/products/' + this.props.product.image}
                            />
                        </div>
                    </Link>
                    <h5 className="text-xl font-semibold pb-4 text-center">
                        {this.props.product.name}
                    </h5>
                    <p>
                        {
                            Object.keys(this.props.product.spec).map((item, index) => {
                                return <>
                                    <p>{item} : {this.props.product.spec[item]}</p>
                                </>
                            })
                        }
                    </p>
                    <br></br>
                    <p>
                        {this.props.product.other}
                    </p>
                </div>
            </>
        )
    }
}