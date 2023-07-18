import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({children}) {
    // const [settings, setSettings] = React.useState([]);  
    // const [dataLoaded, setDataLoaded] = React.useState(false);  
    // React.useEffect(()=>{
    //     getData()
    // },[])
    // const getData=()=>{
    //     fetch('DATA/settings.json'
    //     ,{
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }
    //     )
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         setSettings(myJson)
    //         setDataLoaded(true)
    //     });
    // }
    return (//!dataLoaded?<Preloader />:
        <>
            <Header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Header>
            {children}
            <Footer />
        </>
    )
}