import React from 'react'

const AboutComp = () => {
    return (
        <main>
            <section className="container-fluid mt-5">
            <div className="row g-5">
                    <div className=" col-lg-6 about-section px-lg-5 py-lg-5">
                        <h1 className=" display-4 mx-lg-4">about company</h1>
                        <h2 className=" display-6 mx-lg-4 mt-3">history</h2>
                        <p className=" fw-light mt-4 mx-lg-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nulla impedit reiciendis fugiat! Deleniti reiciendis eos possimus nisi deserunt enim, nam, pariatur magnam ex, alias soluta reprehenderit doloribus laboriosam sapiente. Ad, nostrum? 
                        Eveniet nesciunt maiores ipsum aliquid assumenda vitae nisi.</p>
                    </div>
                    <div className=" col-lg-6">
                        <img src="/image/spray-farm.png" alt="farmer spraying farm" className=" img-fluid" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutComp
