export default class BikeService {
    data =[
        { 
          id: 1,
          title: "Name of bike",
          cost: 130
        }, 
        {
            id: 2,
            title: "Name of bike 2",
            cost: 240
        }
    ];
    
    getData() {
        return new Promise((resolve) => 
            setTimeout(() =>resolve(this.data)
            , 700))
    };
};