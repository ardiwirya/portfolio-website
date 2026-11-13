import { profile } from "../data/profile";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-outline border-l-transparent border-r-transparent text-foreground">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row gap-2 justify-between">
        <span>{profile.name}</span>
        <p className="text-muted">Frontend Developer · {profile.location}</p>
      </div>
    </footer>
  );
};

export default Footer;
