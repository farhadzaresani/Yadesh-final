import React from "react";
import PlaylistComp from "../components/videocourse/Playlist";
import RelatedCoursesComp from "../components/videocourse/RelatedCourses";
import PlayerComp from "../components/_generalvideo/Player";
import TagsComp from "../components/_generalvideo/Tags";
import TeacherBoxComp from "../components/_generalvideo/TeacherBox";
import TeacherInfoComp from "../components/_generalvideo/TeacherInfo";
import ThisNotes from "../components/_generalvideo/ThisNotes";
import VideoButtonsComp from "../components/_generalvideo/VideoButtons";

const VideoCoursePage = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-[90vw] flex flex-col">
<div className="flex">
  <div className="w-[70vw] mt-10  flex flex-col items-center">

        <PlayerComp />
        <TeacherInfoComp />
  </div>
  <div className="w-[30vw] h-[97vw] bg-[#001D29] mt-10 rounded-lg">

        <TeacherBoxComp />
        <ThisNotes/>
        <PlaylistComp />

  </div>

</div>
      <RelatedCoursesComp />
      </div>
    </div>
  );
};

export default VideoCoursePage;
