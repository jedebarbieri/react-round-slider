import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { RoundSlider } from '../core/ui/RoundSlider';

const App = () => {
    return (
        <>
            <RoundSlider
                rx={ 150 }
                ry={ 150 }

                startAngleDegrees={ 0 }
                endAngleDegrees={ 180 }

                strokeWidth={ 15 }
                bgColor="#285f68"

                rxPointer={ 20 }
                ryPointer={ 10 }
            />

            <RoundSlider
                rx={ 150 }
                ry={ 150 }

                startAngleDegrees={ 0 }
                endAngleDegrees={ 90 }

                strokeWidth={ 15 }
                bgColor="#285f68"

                rxPointer={ 20 }
                ryPointer={ 10 }
            />

            <RoundSlider
                rx={ 150 }
                ry={ 150 }

                startAngleDegrees={ 90 }
                endAngleDegrees={ 270 }

                strokeWidth={ 15 }
                bgColor="#285f68"

                rxPointer={ 20 }
                ryPointer={ 10 }
            />

            <RoundSlider
                rx={ 150 }
                ry={ 150 }

                startAngleDegrees={ 180 }
                endAngleDegrees={ 270 }

                strokeWidth={ 15 }
                bgColor="#285f68"

                rxPointer={ 20 }
                ryPointer={ 10 }
            />

            <RoundSlider
                rx={ 150 }
                ry={ 150 }

                startAngleDegrees={ 270 }
                endAngleDegrees={ 0 }

                strokeWidth={ 15 }
                bgColor="#285f68"

                rxPointer={ 20 }
                ryPointer={ 10 }
            />
        </>
    );
};

const init = () => {
    const $root =  document.getElementById('root') as HTMLElement;
    if(!$root) return;

    const root = ReactDOM.createRoot($root);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

init();

