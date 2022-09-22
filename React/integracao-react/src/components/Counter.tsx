/* eslint-disable import/no-anonymous-default-export */


interface CountProps {
    counter: number
}

export default function Counter(props: CountProps){
    return (
        <div>
            {props.counter} 
        </div>   
    )
}