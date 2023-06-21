import SignIn from "~/components/signIn";
import SignUp from "~/components/signUp";

const Home = () => {
  return (
    <div className="flex h-screen flex-row divide-x divide-gray-500/50">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Home;
