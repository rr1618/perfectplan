import React,{useState,useEffect} from 'react'
import {Row, Col} from 'antd';
import {animated, useSprings,useTransition,useTrail} from 'react-spring'
const Animation = () => {
    const [items,setItems] = useState([{key:'1',text:'1'},{key:'2',text:'2'},{key:'3',text:'3'},{key:'4',text:'4'}])
    const transitions = useTransition(items,item=>item.key,{
       from: { transform: 'translate3d(0,-40px,0)' },
enter: { transform: 'translate3d(0,0px,0)' },
leave: { transform: 'translate3d(0,-40px,0)' }
    })
return transitions.map(({ item, props, key }) =>
<animated key={key} style={props}>{item.text}</animated>
)
}
export default Animation
