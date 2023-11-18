import './App.css';

function App() {
  return (
    <section className="wrapper">
      <nav>
        <div>
          <img src="img/logo.png" alt="logo" className="logo" />
          <a href="/" className="home">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="5" viewBox="0 0 49 5" fill="none">
            <path d="M1 3.99992C14.1667 1.49992 42 -2.00008 48 3.99992" stroke="#8437FA" />
          </svg>
          <a href="/" className="my">My Stakes</a>
        </div>

        <div>
          <a href="/" className="button btn" style={{
            border: "1px solid #8437FA",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "#8437FA",
            color: "white",
            marginRight: 5
          }}>Connect Wallet</a>
        </div>
      </nav>
      <div className="percent">
        {/* eslint-disable-next-line */}
        <marquee onmouseover="this.stop()" onmouseout="this.start()" style={{color:'#fff'}}>
          <span style={{paddingRight:'90px'}}>Ethereum : 3 months  37.54%  1 Year 60.29%  2 Years  3.44%  4 Years 120.57% </span> <span style={{paddingRight:'90px'}}>Current Staking APY </span> <span style={{paddingRight:'90px'}}>Ethereum : 3 months  37.54%  1 Year 60.29%  2 Years  3.44%  4 Years 120.57%</span> <span style={{paddingRight:'90px'}}>Ethereum : 3 months 37.54% 1</span> <span style={{paddingRight:'90px'}}>Current Staking APY</span>
        </marquee>
      </div>
      <div className="hero section">
        <div className="hero_left">
          <h1>Stake BRISE, Earn BEFE</h1>
          <p> Stake your BRISE tokens to earn Bitgert's meme/reward token, BEFE. Our user-friendly interface makes it simple and safe to stake, allowing you to start earning today.</p>
          <a href="/" className="btn1 btn" style={{
            border: "1px solid #8437FA",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "#8437FA",
            color: "white",
            marginRight: 25
          }}>Get Started</a>
          <a href="/" className="btn2 btn" style={{
            border: "1px solid #8437FA",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "transparent",
            color: "white"
          }}> Connect Wallet</a>
        </div>
        <div className="hero_right">
          <img src="img/hero.png" alt="" />
        </div>
      </div>

      <div className="priority">
        <div className="prio_left">
          <h1>We prioritize your safety and convenience above all else.</h1>
          <p>The BRISE staking program was created to prioritize both security and user experience, guaranteeing a smooth and secure staking process.</p>
          <a href="/" className="btn" style={{
            border: "1px solid #8437FA",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "#8437FA",
            color: "white",
            marginRight: 25
          }}>Get Started</a>
        </div>

        <div className="prio_right">
          <div className="div" style={{
            border: "1px solid #FFFFFe",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "#1D1724"
          }}>
            <img src="img/prio_1.png" alt="" />
            <div>
              <h3>600,000+</h3>
              <p>HOLDERS</p>
            </div>
          </div>
          <div className="div" style={{
            border: "1px solid #FFFFFF",
            borderRadius: "0px 0px 0px 20px",
            backgroundColor: "#1D1724"
          }}>
            <div>
              <img src="img/prio_2.png" alt="" />
            </div>
            <div>
              <h3>100M+</h3>
              <p>REACH</p>
            </div>
          </div>
          <div className="div" style={{
            border: "1px solid #FFFFFF",
            borderRadius: "0px 0px 20px 0px",
            backgroundColor: "#1D1724"
          }}>
            <div>
              <img src="img/prio_3.png" alt="" />
            </div>
            <div>
              <h3>$64.8 Million+</h3>
              <p>STAKED</p>
            </div>
          </div>

        </div>
        <img src="img/Bitcoin_front 1.png" className="bitcoin" alt='bitcoin' />
      </div>

      <div className="testimonial">
        <img src="img/Vector.svg" className="vector star" alt="star" />
        <img src="img/person.png" className="person" alt='person' />
        <h5>Digital Creator</h5>
        <h4>JACK AY</h4>
        <p> BRISE serves as the utility token within the Bitgert Ecosystem. The staking program for BRISE was created to incentivize dedicated and unwavering BRISE holders. By staking your BRISE tokens, you can receive our MEME token, BEFE, as a reward. BEFE is characterized as a hyper-meme token.</p>
        <img src="img/coat1.png" className="coat1" alt="coat1" />
        <img src="img/coat2.png" className="coat2" alt="coat2" />
      </div>

      <div className="communities">
        <div className="community">
          <div className="vector">
            <img src="img/vector_symbol.png" className="p_logo" alt='p_logo'/>
            <h3>Join the Brainify community for exciting updates!</h3>
          </div>
          <div className="tele">
            <div className="telegram" style={{ border: "1px solid #8437FA", borderRadius: "0px 0px 70px 0px" }}>
              <img src="img/telegram.png" alt="" />
              <div>
                <h2>Telegram</h2>
                <p>24/7 Global chat and support</p>
              </div>
            </div>
            <div className="telegram" style={{ border: "1px solid #8437FA", borderRadius: "0px 0px 70px 0px" }}>
              <img src="img/game_tele.png" alt="" />
              <div>
                <h2>Telegram</h2>
                <p>24/7 Global chat and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="f_left">
          <p>The Floki staking program was designed to reward loyal, diamond handed FLOKI holders. When you stake
            your
            FLOKI tokens, you will earn our sister token named TokenFi as a reward.</p>
          <img src="img/logo.png" alt="" />
        </div>
        <div className="f_right">
          <div className="resources">
            <h3>Resources</h3>
            <ul>
              <li><a href="/">Brand Assets</a></li>
              <li><a href="/">NFT Portal</a></li>
            </ul>
          </div>

          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li><a href="https://bitgert.com/risk-disclosure-statement/ "> Risk Disclosure</a></li>
              <li><a href="https://bitgert.com/terms-conditions/">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="brain">
            <h3>Brainasfya</h3>
            <ul>
              <li><a href="/">Roadmap</a></li>
              <li><a href="/">Team</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="b_footer">
        <p>Copyright@2023- Brainasfya</p>

        <div className="icon">
          <div className="img">
            <img src="img/facebook.svg" alt="" />
          </div>
          <div className="img">
            <img src="img/twitter.svg" alt="" />
          </div>
          <div className="img">
            <img src="img/linkedin.svg" alt="" />
          </div>
          <div className="img">
            <img src="img/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
