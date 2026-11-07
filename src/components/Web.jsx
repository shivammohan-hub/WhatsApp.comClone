const Web = () => {
  return (
    <section className="h-[750px] flex gap-24 py-10">
        <div className="flex-1 flex justify-end ">
            <img className="h-[550px] w-auto" src="call.png" alt="" />
        </div>
        <div className="flex-1 flex items-center">
            <div className="w-[450px] h-auto flex flex-col gap-5">
                <h2 className="text-[60px] leading-none">New! Call on WhatsApp Web</h2>
                <p className="text-[18px] pb-5">Now you can make and receive video or voice calls — one-on-one or in groups — right from your browser.</p>
                <a className="flex gap-3 items-center underline underline-offset-8 decoration-green-500 decoration-2" href="">Try it
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Web