

function ServiceCard({ service }) {
    return (
        <>
            <a to={`/service-details/${service._id}`}  className="card bg-base-100 shadow-sm mt-5 mb-5">
                <figure>
                    <img src={service.image} alt={service.name} style={{ objectFit: 'contain' }} />
                </figure>
                <div className="card-body items-center">
                    <h4 className="card-title text-center">{service.name}</h4>
                    <p className="text-center">{service["short-details"]}</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-gray-800 text-white btn-xs">View Details</button>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ServiceCard;