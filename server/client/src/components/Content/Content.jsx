import Intro from '../Intro/Intro';
import PresentImgSlider from '../PresentImgSlider/PresentImgSlider';
import AllProducts from '../AllProducts/AllProducts';



export const Content = () => {

    return (
        <>  <div className=" -mb-32">
                <Intro/>
            </div>
            <AllProducts />
            <PresentImgSlider />
        </>
    );
}

export default Content;