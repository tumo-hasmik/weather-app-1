const getData = async()=>{
    try{
        let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=efcca4e2300d43cea5c164353240307&q=Yerevan&days=5&aqi=no&alerts=no')
        if(!response.ok){
            console.log("Something went wrong")
            return
        }
        let objectResponse = await response.json()
        setCityValue(objectResponse.location.name)
        setTimeValue(objectResponse.location.localtime)
        console.log(objectResponse)
    } catch(error){
        console.log("Something went wrong")

    }
}
getData()
const setCityValue = (value)=>{
    let city = document.getElementById('city')
    city.innerText = value
}
const setTimeValue = (value)=>{
    let time = document.getElementById('time')
    const arr = value.split(' ')
    console.log(arr)
    time.innerText = arr[1]
}
