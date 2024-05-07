import clsx from "clsx";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Mastodon,
  Threads,
  Instagram,
} from "./icons";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
};

export default function SocialIcon({ kind, href }) {
  if (!href) return null;
  const SocialSvg = components[kind];
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <SocialSvg
        className={
          "fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"
        }
      />
    </a>
  );
}
