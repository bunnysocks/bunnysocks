'use client'

import Image from "next/image"

export const Intro = () => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-9/12">
                <h1 className="text-4xl font-bold">Hi! Heman here,</h1>
                <p className="text-base text-gray-600">
                    Aspiring Software Engineer, I like building backends and working on blockchain systems, with a focus on writing internal libraries, by removing unncessary layers of abstraction. But at the end of the day, I build what gets the job done - whether that's backend or CLI's.
                </p>
            </div>
            <div className="w-3/12 flex-1">
                <Image src={"/images/heman.png"} alt="heman" width={100} height={100} className="rounded-full border border-gray-100 h-36 w-36" />
            </div>
        </div>
    )
}