

const Usercard = () => {

  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Dinesh k";
  const email = "dinesh@gmail.com";
  const phone = "+91 8839380234";
  const address = "LPU Punjab Jalandhar";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">Email: {email}</p>
      <p className="user-phone">Phone: {phone}</p>
      <p className="user-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;
