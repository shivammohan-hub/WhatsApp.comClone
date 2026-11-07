const Hero = () => {
  return (
    <section className="pt-28">
        <div className=" mx-10 h-[650px] bg-[url('bgHero.png')] flex gap-40 bg-cover rounded-3xl bg- bg-no-repeat">
            <div className=" flex-1 flex items-center justify-center text-white">
                <div className="w-[300px] flex flex-col gap-4 -mt-16">
                    <h1 className="text-[80px] leading-none">Message privately</h1>
                    <p className="text-[18px] leading-1">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                    <button className="flex gap-3 items-center border px-6 py-2.5 rounded-full border-black bg-[#25d366] text-black w-fit">Download 
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className=" flex-1 pt-12">
                <div className="w-[450px] h-[200px] flex flex-col">
                    <img className="pt-2" src="msg1.png" alt="" />
                    <img className="place-self-end mb-6" src="msg2.png" alt="" />
                    <img className="w-72 h-16 pl-3" src="msg3.png" alt="" />
                    <img className="pl-12 h-28 w-36 -mt-3" src="emoji.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero