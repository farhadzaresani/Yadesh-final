import React from "react";
import ProfileCoursesComp from "../components/profile/Courses";
import FavoritesComp from "../components/profile/Favorites";
import ProfileHeroComp from "../components/profile/Hero";
import EditProfileModal from "../components/_general/EditProfile";

const ProfilePage = () => {
  return (
    <>
      <ProfileHeroComp />
      <EditProfileModal />
      <FavoritesComp />
      <ProfileCoursesComp />
    </>
  );
};

export default ProfilePage;
