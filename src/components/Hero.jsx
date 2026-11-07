const Hero = () => {
  return (
    <section className="pt-28">
        <div className=" mx-10 h-[750px] bg-[url('bgHero.png')] flex items-center justify-center bg-cover rounded-3xl bg-center bg-no-repeat">
            <div className="flex-1 text-white">
                <h1 className="text-6xl">Message privately</h1>
                <p className="text">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                <button className="flex gap-3 items-center border px-6 py-2.5 rounded-full border-black bg-[#25d366] text-black">Download 
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    </section>
  )
}

export default Hero