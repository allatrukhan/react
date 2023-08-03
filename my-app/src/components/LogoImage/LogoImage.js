import Logo from '../../logo.png';
import './LogoImage.css';

function LogoImage() {
    return (
      <div class="logo-image">
        <img src={Logo} alt='logo' type="logo"/>
      </div>
    );
  }
  export default LogoImage;