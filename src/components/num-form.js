import React from 'react';

export default class InputField extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data:[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      search:undefined,
      tries:null,
      msg:"",
    }
  }
  handleSeachChanged(event) {
    this.setState({search: event.target.value})
}
  sumbitForm(event){
    event.preventDefault();
    event.target.search.value =""
  }
    linearSearch(arr, value) {
      console.log("this is my value",value)
      console.log("this is my array", arr)
      let msg = "";
      let tries = 0
      for (let i = 0; i< arr.length; i++) {
        tries++
        console.log(arr[i])
          if (arr[i] === parseInt(value,10)) {
            const result = `You got it dude ${value} was found in the dataset after ${tries}  tries.`
            console.log(result)
            this.setState({
              msg:result,
              tries
          });
            break;
          }      
          else if(!msg){  
        msg = 'Value not found';
        tries = 0;
      
      this.setState({
          msg,
          tries
      });
    }
      }

    }
      handleLinSearch() {
        this.linearSearch(this.state.data, this.state.search);
      }
    
      binarySearch(array,value, start=0,end=array.length-1, tries=0){

        tries++;
    if (start > end) {
      const fail = `This value is not in our dataset dude`
      this.setState({
        msg:fail
      })
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == parseInt(value,10)) {
       const succesful = `${value} was found, NICE took this long though ${tries}`
       this.setState({
        msg:succesful
      })
    }
    else if (item <parseInt(value,10)) {
      tries++;
        return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > parseInt(value,10)) {
      tries++;
        return this.binarySearch(array, value, start, index - 1);
    }

  }
  handleBinSearch() {
    const sorted= this.state.data.sort((a, b) => a - b)
    this.binarySearch(sorted, this.state.search);
  }

  render () {
    console.log()
    console.log(this.state)
    return (
      <div>
        <h1 className="banner"> Please Enter a Number </h1>
    <div className="form-banner">
      <form   onSubmit={(e)=>this.sumbitForm(e)}>
      <input 
      onChange={(e)=> this.handleSeachChanged(e)}name="search" type="number" placeholder="Search.."/>
      <button onClick={()=> this.handleLinSearch()}>Linear Search</button>
      <button onClick={()=> this.handleBinSearch()}>Binary Search</button>
        </form>
        <div>
           <p> {this.state.msg}</p>
          </div>

      </div> 
      </div>
    );
  }
};