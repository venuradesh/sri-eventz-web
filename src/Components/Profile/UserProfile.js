import React, { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Foot from "./Foot";
import GallerySection from "./GallerySection";
import PackageSection from "./PackageSection";
import ProfileContainer from "./ProfileContainer";
import TestimonialsSection from "./TestimonialsSection";
import { useParams } from "react-router-dom";
import db from "../../firebase";

const UserProfile = () => {
  const params = useParams();
  const userDB = db.collection("user");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(null);
    userDB
      .doc(params.id)
      .get()
      .then((docs) => {
        setUserData(docs.data());
        console.log(userData);
      });
  }, [params]);

  return (
    <>
      {!userData ? (
        "loading"
      ) : (
        <>
          <ProfileContainer id={params.id} telephone={userData.contactNo} name={userData.name} profileImage={userData.profileImage} level={userData.level} description={userData.description} title={userData.title} />
          <AboutSection aboutMe={userData.aboutMe} skills={userData.skills} progress={userData.progress} user={userData} />
          <PackageSection packages={userData.packages} />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
          <Foot />
        </>
      )}
    </>
  );
};

export default UserProfile;
