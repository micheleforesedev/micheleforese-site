import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container flex flex-wrap justify-center mx-auto">
        <p>
          &copy; {new Date().getFullYear()}.
          Build with <a className="underline text-violet-600 decoration-violet-500" href="https://gatsbyjs.com">Gatsby</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
