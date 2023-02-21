export const Hero = () => {
    return (
        <div className="flex items-center px-[7.5vw]">
            <div className="w-1/2">
                <h1 className="font-bold text-[4rem] leading-[1.2] tracking-tight mb-[2.4rem]">Everything you need to work from anywhere.</h1>
                <p className="text-2xl mb-[2.4rem]">Save on time and cost by trusting allwhere with procurement, logistics, and deployment.</p>
                <button className="btn-primary" aria-label="Book now">Book a demo</button>
            </div>
            <img src="/images/hero_image.jpg" alt="A cartoony graphic that feels good" className="w-1/2 h-auto" />
        </div>
    )
}