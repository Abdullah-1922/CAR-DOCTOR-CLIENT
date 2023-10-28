import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data)
        })
    }
    ,[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h3 className="text-5xl text-orange-600">Our Services Area </h3>
                <p className="my-5 w-4/5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae fugiat inventore quibusdam fugit, itaque ipsum assumenda error, soluta nam dignissimos nisi, temporibus vitae perferendis quod dolore necessitatibus eum quaerat.</p>
            </div>
            <div>
                
                <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service=><div key={service._id} className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img src={service.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{service.title}</h2>
                          <p>Price : {service.price}</p>
                          <div className="card-actions">
                            <AiOutlineArrowRight className="text-xl text-red-700 "></AiOutlineArrowRight>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;