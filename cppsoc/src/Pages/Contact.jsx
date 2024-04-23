function Contact() {
  return (
    <div className="container">
      <div className="welcome">
        <p>
          Feel free to reach out to us through Discord or explore more links on
          our Linktree:
        </p>
        <div className="media">
          <iframe
            src="https://discord.com/widget?id=1222272548306292827&theme=dark"
            width="500"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          <a href="https://linktr.ee/cppsoc">
            <img
              src="https://assets.production.linktr.ee/profiles/_next/static/logo-assets/default-meta-image.png"
              width="500"
              height="250"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
