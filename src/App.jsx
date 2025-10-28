import './App.css';
import CurvedLoop from './components/curved/CurvedLoop';
import FlowingMenu from './components/flowing-menu/FlowingMenu';
import TextPressure from './components/text-pressure/TextPressure';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';

export default function LogoScrollEffect() {
  const demoItems = [
    {
      link: '#',
      text: 'Web & Mobile App',
    },
    {
      link: '#',
      text: 'Branding',
    },
    {
      link: '#',
      text: 'Comunicazione',
    },
    {
      link: '#',
      text: 'Digital Marketing',
    },
    {
      link: '#',
      text: 'Contenuti Audiovisivi',
    },
    
  ];
  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <svg
            width="200"
            height="118"
            viewBox="0 0 519 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M206.94 0H181.23C178.71 0 176.66 2.05001 176.67 4.57001L176.82 112.91C176.82 115.42 178.86 117.46 181.37 117.47L305.18 117.78C307.7 117.79 309.75 115.74 309.75 113.22V87.51C309.75 84.99 307.71 82.95 305.19 82.95H212.87C212.11 82.95 211.5 82.34 211.5 81.58V4.57001C211.5 2.05001 209.46 0 206.94 0Z"
              fill="#D5D5D5"
            />
            <path
              d="M357.3 117.78H325.29C324.51 117.78 323.87 117.15 323.87 116.36V1.42001C323.87 0.640013 324.5 0 325.29 0H357.3C358.08 0 358.72 0.630013 358.72 1.42001V116.37C358.72 117.15 358.09 117.78 357.3 117.78Z"
              fill="#D5D5D5"
            />
            <path
              d="M379.93 4.56003V30.26C379.93 32.78 381.97 34.82 384.49 34.82L452.55 34.86C453.95 34.86 454.45 36.71 453.23 37.41L375.31 82.38C374.18 83.03 373.48 84.24 373.48 85.54V113.21C373.48 115.73 375.52 117.77 378.04 117.77H507.13C509.65 117.77 511.69 115.73 511.69 113.21V87.49C511.69 84.97 509.65 82.93 507.13 82.93L439 82.89C437.6 82.89 437.1 81.03 438.32 80.34L516.31 35.37C517.44 34.72 518.14 33.51 518.14 32.21V4.56003C518.14 2.04003 516.1 0 513.58 0H384.5C381.98 0 379.93 2.04003 379.93 4.56003Z"
              fill="#D5D5D5"
            />
            <path
              d="M113.03 34.84C117.72 34.84 122.33 34.98 126.85 35.25C131.37 35.52 135.66 36.07 139.69 36.89C143.72 37.71 147.49 38.85 150.98 40.33C153.19 41.26 155.25 42.38 157.16 43.69C158.5 44.61 160.31 43.66 160.31 42.04V12.67C160.31 11.5 159.77 10.36 158.81 9.69C154.23 6.45 148.92 4.06001 142.89 2.54001C136.18 0.850008 129.29 0 122.2 0H36.64C31.62 0 26.88 0.960016 22.41 2.86002C17.94 4.77002 14.04 7.39002 10.71 10.71C7.38 14.04 4.75999 17.91 2.85999 22.33C0.949993 26.75 0 31.52 0 36.64V81.14C0 86.16 0.949993 90.9 2.85999 95.37C4.76999 99.84 7.38 103.74 10.71 107.07C14.03 110.4 17.93 113.02 22.41 114.92C26.88 116.83 31.63 117.78 36.64 117.78H98.64C101.26 117.78 104.18 117.26 107.39 116.23C110.6 115.19 113.63 113.78 116.47 111.98C119.3 110.18 121.68 108.05 123.59 105.6C123.85 105.26 124.1 104.92 124.32 104.57C124.53 104.24 124.9 104.05 125.29 104.05C125.93 104.05 126.45 104.57 126.45 105.21V112.89C126.45 115.41 128.49 117.45 131.01 117.45H155.75C158.27 117.45 160.31 115.41 160.31 112.89V68.87C160.31 64.94 159.63 61.26 158.27 57.83C156.9 54.4 154.75 51.42 151.81 48.92C148.87 46.41 145.13 44.42 140.6 42.95C136.07 41.48 130.7 40.74 124.49 40.74L85.91 40.78C82.24 40.79 79.27 43.76 79.27 47.43V68.97C79.27 72.65 82.25 75.62 85.93 75.62L120.07 75.58C121.92 75.58 123.28 75.91 124.16 76.56C125.03 77.21 125.47 78.14 125.47 79.34C125.47 79.89 125.36 80.38 125.14 80.81C124.92 81.25 124.59 81.63 124.16 81.95C123.72 82.28 123.18 82.52 122.53 82.69C121.87 82.85 121.06 82.93 120.08 82.93L46.29 82.92C39.98 82.92 34.87 77.81 34.87 71.5V69.02C34.87 68.96 34.85 68.91 34.85 68.86V48.9C34.85 48.84 34.87 48.79 34.87 48.74V46.25C34.87 39.94 39.98 34.83 46.29 34.83H75.53V34.84H113.03Z"
              fill="#D5D5D5"
            />
          </svg>

          <Header></Header>
        </div>
      </div>

      <div className="content">
        <div className="hero">
          <div
            className="hello"
            style={{ position: 'relative', height: '300px' }}
          >
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <CurvedLoop
            marqueeText="Be ✦ Creative ✦ With ✦ Gliz ✦ Agency ✦"
            speed={3}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
          <div
            className="services"
            style={{ height: '600px', position: 'relative' }}
          >
            <FlowingMenu items={demoItems} />
          </div>
          <div className="contact">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}
