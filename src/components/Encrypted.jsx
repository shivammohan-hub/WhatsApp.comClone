const Encrypted = () => {
  return (
    <section className=" flex gap-24 bg-[#111b21] py-20">
        <div className="flex-1 flex justify-end ">
            <img className="h-[650px] w-auto" src="encrypted.png" alt="" />
        </div>
        <div className="flex-1 flex items-center">
            <div className="w-[450px] h-auto flex flex-col gap-5 text-white">
                <h2 className="text-[60px] leading-none">Speak <br /><span className="text-[#25d366]">freely</span></h2>
                <p className="text-[18px] pb-5">With end-to-end encryption on WhatsApp, your personal messages and calls are secured with a lock. Only you and the person you're talking to can read or listen to them, and no one else, not even WhatsApp</p>
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

export default Encrypted