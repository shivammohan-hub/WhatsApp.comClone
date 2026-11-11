const Express = () => {
  return (
    <section className=" flex gap-44 py-24">
        <div className="flex-1 flex justify-end ">
            <img className="h-[650px] w-auto" src="express.png" alt="" />
        </div>
        <div className="flex-1 flex items-center">
            <div className="w-[450px] h-auto flex flex-col gap-5">
                <h2 className="text-[60px] leading-none">Say what <br />you feel</h2>
                <p className="text-[18px] pb-5">Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.</p>
                <a className="flex gap-3 items-center underline underline-offset-8 decoration-green-500 decoration-2" href="">Learn more
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Express