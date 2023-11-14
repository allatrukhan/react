

import './TruckTable.css';
import SelectTruckHeader from '../SelectTruckHeader/SelectTruckHeader';
import SelectTrailer from '../SelectTrailer/SelectTrailer';


function TruckTable(){

    return(
        <div class="truck-table"> 
            <div class="header-truck">
                <SelectTruckHeader/> 
                <SelectTruckHeader/> 
                <SelectTruckHeader/> 
                <SelectTruckHeader/> 
            </div>
            <div class="select-trailer">
                <SelectTrailer/>
                <SelectTrailer/>
                <SelectTrailer/>
                <SelectTrailer/>
            </div>
        </div>  
    )
}

export default TruckTable;   