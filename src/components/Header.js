import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import GptSearchPage from "./GptSearchPage";
import LanguageList from "./LanguageList";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const gptPage = useSelector((Store) => Store.gptSearchPage.gptPage);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="w-screen absolute top-5 flex justify-between p-4">
      <img className="w-24" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 gap-3">
          {gptPage && <LanguageList />}
          <GptSearchPage />
          <img
            src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="logoutLogo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out {user.displayName}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
