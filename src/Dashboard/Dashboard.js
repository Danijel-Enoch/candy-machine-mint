import React from 'react'
import "./dashboard.css"

function Dashboard() {

    const Img = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
        ,
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
        ,

        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            Name: "Yasuke",
            Price: 40,
            alt: "name"
        }
    ]
    return (


        <div className="dashboard">

            <div className='dashboard-card'>
                {Img.map((d) => (
                    <div className="dashboard-inner" key={d.id}>
                        <img src={d.img} alt={d.alt} />
                        <div className='price'>
                            <p>{d.Name}</p><span>$`{d.Price}`$</span>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Dashboard
