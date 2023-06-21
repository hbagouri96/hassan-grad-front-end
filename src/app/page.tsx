import SignIn from "~/components/signIn";
import db from "~/server/db";

const Home = () => {
  const res = db.query.user.findFirst({
    columns: {
      username: true,
      password: true,
    },
  });

  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Home;
