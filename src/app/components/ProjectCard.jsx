import React, { useState } from 'react'
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({
    imgUrl,
    title,
    stacks = [],
    description,
    dateOrPublisher,
    type= [],
    gitUrl,
    previewUrl,
    showGitUrl,
    showPreviewUrl
  }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
    <div className="bg-[#181818] rounded-xl border border-gray-600 m-0 shadow-md 
                      hover:shadow-lg hover:-translate-y-1 hover:translate-x-1  
                      transition-all duration-300 cursor-pointer">
        <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
            {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60">
                <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin" />
            </div>
            )}
            <Image
            src={imgUrl}
            alt={title}
            fill
            className='object-cover'
            onLoad={() => setIsLoading(false)}
            />
        </div>
  
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] px-4 mb-4">
            <h5 className="text-xl font-semibold mb-4">{title}</h5>
            {showGitUrl && (
            <div className="flex flex-wrap gap-2 mb-4">
                {stacks.map((stack, index) => (
                    <span
                    key={index}
                    className="bg-[#2A2A2A] text-sm text-center text-white py-1 px-3 rounded-full"
                    >
                    {stack}
                    </span>
                ))}
            </div>
            )}
            <p className="text-[#ADB7BE]">{description}</p>
            {dateOrPublisher && (
                <p className="text-[#ADB7BE] mb-5">{dateOrPublisher}</p>
            )}
            <div className="flex flex-wrap gap-2 text-center">
                {type.map((t, index) => (
                    <span
                        key={index}
                        className="bg-[#2A2A2A] text-sm text-white py-1 px-3 rounded-full"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;