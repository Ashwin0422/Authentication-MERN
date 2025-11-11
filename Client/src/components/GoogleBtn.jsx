import { GoogleLogin } from "@react-oauth/google";

const GoogleBtn = () => {
  const handleGoogleSignInSuccess = async (res) => {
    const token = res.credential;

    const response = await fetch("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (response.ok) {
        const date = await response.json();
        window.location.href = "https://portfolio-react-navy-three.vercel.app/"
    }else {
        alert("something went wrong")
        console.log("something went wrong");
    }
  };

  const handleGoogleSignInError = () => {
    console.log("Google Login Failed...");
    alert("Google Login Failed...");
  };


  return (
    <div className="mt-4">
      <GoogleLogin
        onSuccess={handleGoogleSignInSuccess}
        onError={handleGoogleSignInError}
      />
    </div>
  );
};

export default GoogleBtn;
