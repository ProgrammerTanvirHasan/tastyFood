

const Banner = () => {
    return (
        <div className="hero w-full h-[520px]" style={{backgroundImage: 'url(https://i.ibb.co/7j4cNCT/download-1.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking class tailored for you</h1>
            <p className="mb-5">Best Authentic food for best guest.Discover an exceptional recipe with healthy food.</p>
        
            <button className=" p-2 bg-green-600 rounded-xl text-black">Explore now</button>
            <button className="p-2 bg-black ml-2 rounded-xl">Our feedback</button>
                   
            
          </div>
        </div>
      </div>
    );
};

export default Banner;