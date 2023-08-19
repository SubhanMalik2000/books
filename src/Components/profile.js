import profile from "../Media/Profile.svg";

function Profile() {
  return (
    <div className="w-1/5 flex justify-center">
      <img src={profile} className="profile" />
    </div>
  );
}
export default Profile;
