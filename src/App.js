import HeaderBlock from './Components/HeaderBlock';
import LayoutBlock from './Components/LayoutBlock';
import FooterBlock from './Components/FooterBlock';
import img1 from './assets/bg2.jpeg';
import img2 from './assets/bg3.jpeg';

const App = () => {
    return (
        <>
            <HeaderBlock 
              title="This is new title"
              description = "This is a description"
            />
            <LayoutBlock
              title = "LayoutBlock 1"
              description = "This is a description"
              urlBg = { img1 }
            />
            <LayoutBlock
              title = "LayoutBlock 2"
              description = "This is a description"
              colorBg = 'red'
              
            />
            <LayoutBlock
              title = "LayoutBlock 3"
              description = "This is a description"
              urlBg = { img2 }
            />
            <FooterBlock />

        </>
    );
}

export default App;