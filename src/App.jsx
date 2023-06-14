import { clsx } from "clsx";
import { Button } from "./components/Button";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <div className={clsx("bg-gradient-to-r from-[#03001e] via-[#7303c0] to-[#ec38bc] h-full")}>
      <div className="flex flex-col justify-center items-center py-14">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="profile w-32 h-32 rounded-full flex justify-center items-center">
            <img src="/profile.jpg" alt="profil" className="w-32 h-32 rounded-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-slate-200 font-serif">Haris Munandar</h1>
        </div>
        <div className="mt-14 flex flex-col justify-center items-center space-y-10">
          <Button text="Instagram" icons={FaInstagram} />
          <Button text="Twiter" icons={FaTwitter} />
          <Button text="Youtube" icons={FaYoutube} />
          <Button text="Tiktok" icons={FaTiktok} />
        </div>
      </div>
    </div>
  );
};

export default App;
