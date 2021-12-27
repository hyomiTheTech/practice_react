import React, {useState, useEffect} from 'react'

const AsyncPractice = () => {
    const [data, getData] = useState([])


    const promiseWithNoParam = new Promise((resolve, reject) => {
      let a = 2
      if (a === 2) {
        resolve(3)
      } else (
        reject("no good")
      )
    })

    const promWithParam = (reply) => 
      new Promise((resolve, reject) => {
        if (reply === 3) {
          resolve("all done!!")
        } else {
          reject("oh no!!!")
        }
      })

    const asyncCode = async () => {
      try{
        const firstCode = await promiseWithNoParam
        console.log("first worked!!")
        const secondCode = await promWithParam(firstCode)
        
        return secondCode;
      } catch(err) {
        console.log(err)
      }
    }
    

    useEffect(() => {
      // promiseWithNoParam.then(message => promWithParam(message)).then(console.log)
      asyncCode().then(console.log).catch(console.log)
        fetch("http://localhost:3001/").then(res => res.json()).then(data => getData(data)).catch(console.log)
    }, [])


    

    return (
        <div>
            {data.map(data => (
                <li key={data.id}>{data.name}</li>
            ))}
        </div>
    )


    
}


export default AsyncPractice
