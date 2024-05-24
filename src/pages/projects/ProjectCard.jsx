import React from "react";

const ProjectCard = ({ imageSrc, title, description, technologies, uri }) => {
  return (
    <>
      <div className="w-[300px]  h-[350px] flex flex-col items-center border border-gray-400">
        <div className="w-[280px] h-[150px] overflow-hidden mt-2 mx-auto">
          <img src={imageSrc} alt={title} className="object-cover" />
        </div>
        <div className="w-[91%] mx-auto pt-2">
          <h4 className=" pb-2 text-black">{title}</h4>
          <p className="text-xs pb-2">{description}</p>
          <p className="text-xs pb-2">Technologies : {technologies}</p>
          <a href={uri} alt={uri} target="_blank" className="text-xs">
            {uri}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
