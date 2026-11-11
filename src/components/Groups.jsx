const Groups = () => {
  return (
    <div className="py-24">
        <section className=" flex gap-44 ">
        <div className="flex-1 flex items-center justify-end">
            <div className="w-[420px] h-auto flex flex-col gap-5">
                <h2 className="text-[60px] leading-none">Keep in touch with your groups</h2>
                <p className="text-[18px] pb-5" >Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.</p>
                <a className="flex gap-3 items-center underline underline-offset-8 decoration-green-500 decoration-2" href="">Learn more
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="flex-1 relative">
    <img className="" src="groupchat.png" alt="" />

    <img
        className="h-[400px] w-auto absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/4"
        src="groups.png"
        alt=""
    />
</div>
    </section>
    </div>
  )
}

export default Groups