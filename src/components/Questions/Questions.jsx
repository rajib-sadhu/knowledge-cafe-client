import React from 'react';

const Questions = () => {
    return (
        <div className='bg-slate-500 md:p-10 p-3'>
            <ul className='mx-auto grid md:grid-cols-2 grid-cols-1 gap-4'>
                <li className='bg-white md:px-10 px-3 py-5 rounded-md'>
                    <h1 className='text-lg font-semibold'>Q1: Different betweens 'props' and 'state'</h1>
                    <ul style={{ listStyle: 'order' }} className='mt-3 space-y-1 px-4'>
                        <li>
                            Props are read only it's can't changed, but state is run locally and change when component update itself.
                        </li>
                        <li>
                            Props use in properties when component called and use in component parameter, but State can use inside the component.
                        </li>
                    </ul>
                </li>
                <li className='bg-white px-10 py-5 rounded-md'>
                    <h1 className='text-lg font-semibold'>Q2: How does the useState work?</h1>
                    <p className='mt-3 px-1'>
                        First we import the useState from React, then we declare useState. useState expression in the React like- <span className='font-semibold'>const [state, setState] = useState()</span>. In this expression we can set initial value of state inside the useState() - parameter, ex- useState(0), so state's initial value is 0. Now, if we want to change state variable, then we can use setState() function. setState() stored the updated value of state variable, ex- if we write setState(10), now state value is 10.
                    </p>
                </li>
                <li className='bg-white px-10 py-5 rounded-md'>
                    <h1 className='text-lg font-semibold'>Q3: use cases of the useEffect except data load.</h1>
                    <p className='mt-3 px-1'>
                        Mainly useEffect() use is API data load, but we can use this hook in many purpose. We can use dependencies in the useEffect()., then we can change the state, change the props and many more.
                    </p>
                </li>
                <li className='bg-white px-10 py-5 rounded-md'>
                    <h1 className='text-lg font-semibold'>Q4: How does React work?</h1>
                    <p className='mt-3 px-1'>
                        React is a library of Javascript. It is most powerful flexible frontend user interface. React is based on the component concepts. Reusable code we can called similar in loop, different in data. When the React component render represent virtual DOM, virtual DOM is very lightweight and copy of the actual DOM. React component have two types of data - props and state. Every components running in the lifecycle in React.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Questions;