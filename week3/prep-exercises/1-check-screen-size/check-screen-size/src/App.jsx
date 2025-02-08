import './App.css';
import AvatarComponent from './components/AvatarComponent.jsx';
import useWindowSize from './components/useWindowSize.jsx';

import { MITHI, DIANA, MIKONG } from './components/avatarData.jsx';

function App() {
    const windowSize = useWindowSize();
    const getAvatar = () => {
        if (!windowSize.width) return { name: 'Mithi', properties: MITHI };

        if (windowSize.width > 1000) {
            return { name: 'Mithi', properties: MITHI };
        }
        if (windowSize.width <= 700) {
            return { name: 'Mikong', properties: MIKONG };
        }
        return { name: 'Diana', properties: DIANA };
    };

    const { name, properties } = getAvatar();

    return (
        <div>
            <div>
                Current size of the window:
                <p>Width: {windowSize.width}</p>
                <p>Height: {windowSize.height}</p>
            </div>
            <AvatarComponent
                name={name}
                screenSize={windowSize.width}
                properties={properties}
            />
        </div>
    );
}

export default App;
