import React from "react";



const clientimgs = [
	{
		img: "/img/clients/client-1.png",
		alt: "",
	},
	{
		img: "/img/clients/client-2.png",
		alt: "",
	},
	{
		img: "/img/clients/client-3.png",
		alt: "",
	},
	{
		img: "/img/clients/client-4.png",
		alt: "",
	},
	{
		img: "/img/clients/client-5.png",
		alt: "",
	},
	{
		img: "/img/clients/client-6.png",
		alt: "",
	},
	{
		img: "/img/clients/client-1.png",
		alt: "",
	},
	{
		img: "/img/clients/client-2.png",
		alt: "",
	},
];

const Clientimg = () => {
	return (
		
			<section className="ezy__clients4 light sm:py-14 md:pb-10  sm:px-16 xl:px-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-5 mx-auto" data-aos="zoom-out">
			<div className="flex justify-center text-center mb-6 lg:mb-12">
                    <div className="w-full max-w-2xl">  
                        <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
                        Our Client
                        </h2>
                        <p className="text-slate-600 text-lg breck-all">
						These are just a few examples, and our client base extends across various other industries such as telecommunications, energy, transportation, and more. 
                        </p>
                    </div>
                </div>

				<marquee behavior="scroll" direction="left" loop>
					<div  className="flex justify-center items-center text-center">
						{clientimgs.map((client, i) => (
							<img
								src={client.img}
								alt={client.alt}
								className="max-h-20 img-fluid px-12 sm:my-6"
								key={i}
							/>
						))}
					</div>
				</marquee>
			</div>
		</section>
	
		
	);
};
export default Clientimg;