import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Search } from './reducer';
import GetKeyWord from './service';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Dictionary(){
    const word = useSelector((state)=>state.dictionary.value)
    const dispatch = useDispatch();
    console.log(word)
    const [search, setSearch] = useState('');
    const [data, setData] = useState();
    const [sword, setWord] = useState();
    const [width, setWidth] = useState(10);
    const searchWord=async()=>{
        GetKeyWord(search).then(json=>setData(json))

        data && await data.forEach(async d => {
            await setWord(d.word)
        });

        setTimeout(() => {
            setWidth(20)
        }, 1000);
        setTimeout(() => {
            setWidth(40)
        }, 1000);
        setTimeout(() => {
            setWidth(60)
        }, 1000);
    }
    return(<div style={{marginTop:"1%"}}>
       
        <TextField sx={{width:"50%"}} label="Search eg: water" id="Dictionary" 
        onChange={(e)=>setSearch(e.target.value)}/>

        <SearchIcon sx={{fontSize:"338%"}} color="primary" onClick={searchWord}/>
        {sword && sword}


    {data && data.map((d)=>
    <div style={{textAlign:"left",margin:"0 auto",maxWidth:"50%"}}>
    <p style={{fontSize:"18px", fontWeight:600}}>{d.word}</p>
    <hr style={{height:"3px", backgroundColor:"blue",width:width+"%"}}/>

    {d.meanings.map(m=><p>partOfSpeech: {m.partOfSpeech.length>0 && m.partOfSpeech}<br/>
    <br/>meaning:{m.synonyms.length>0 && m.synonyms}<br/>antonyms:{m.antonyms.length>0 && m.antonyms}
    <br/>definitions:{m.definitions.length>0 && 
    
    m.definitions.map((de)=><p>{de.definition.length>0 && de.definition}
   <br/> example:{de.example && de.example.length>0 && de.example}</p>)}</p>)}

    </div>
    )}
</div>
)}

export default Dictionary;