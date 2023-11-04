import {useEffect, useState} from 'react';

import './carousel.css';

// ---------------------------------------------------------------------------

const Carousel = (props: any) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [noImages, setNoImages] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setNoImages(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (noImages - 1)) {
            const nextIndex = currentIndex + 1;
            console.log(`nextIndex |${nextIndex}|`);
            setCurrentIndex(nextIndex);
        }
        // sleep();
    }

    const nextImage = () => {
        console.log(`noImages |${noImages}|  currentIndex |${currentIndex}|`);
        if (currentIndex < noImages) {
            const nextIndex = currentIndex + 1;
            console.log(`nextIndex |${nextIndex}|`);
            setCurrentIndex(nextIndex);
        } else {
            setCurrentIndex(0);
        }
        sleep();
    }

    // let intervalId: any;
    // const shift = () => {
    //       // check if an interval has already been set up
    //       if (!intervalId) {
    //         intervalId = setInterval(incrementImage, 1000);
    //       }
    // }

    const sleep = () => {
        setTimeout(nextImage, 5000);
    };

    const prev = () => {
        if (currentIndex > 0) {
            const nextIndex = currentIndex - 1;
            console.log(`nextIndex |${nextIndex}|`);
            setCurrentIndex(nextIndex);
        }
    }

    // loop();

    return (
        <div className="carousel-container">
            { currentIndex > 0 &&
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
            }
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            {
                currentIndex < (noImages - 1) &&
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            }

        </div>
    )
}

// ---------------------------------------------------------------------------

export default Carousel


