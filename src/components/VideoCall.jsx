const VideoCall = () => {
  return (
    <div>
        <section className="h-[650px] flex gap-44 py-10">
        <div className="flex-1 flex items-center justify-end">
            <div className="w-[450px] h-auto flex flex-col gap-5">
                <h2 className="text-[60px] leading-none">Never miss a moment with voice and video calls</h2>
                <p className="text-[18px] pb-5" >From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p>
                <a className="flex gap-3 items-center underline underline-offset-8 decoration-green-500 decoration-2" href="">Learn more
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="flex-1 ">
            <img className="h-[650px] w-auto" src="videocall.png" alt="" />
        </div>
    </section>
    </div>
  )
}

export default VideoCall