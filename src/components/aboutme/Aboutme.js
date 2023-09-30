import "./aboute.scss";

const Aboutme = () => {
  return (
    <div class="sidepanel">
      <div class="sidepanel__text">
        <span>About me</span>
      </div>
      <div class="sidepanel__divider"></div>
      <a href="https://github.com/jksenby/" class="sidepanel__icon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
          alt="github"
        />
      </a>
      <a href="https://t.me/jksenby" class="sidepanel__icon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png"
          alt="telegram"
        />
      </a>
    </div>
  );
};

export default Aboutme;
