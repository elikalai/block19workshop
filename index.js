const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Dr. Possibility", price: 43, occupation: "teacher" },
    { name: "Dr. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Dr. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Dr. Goose", price: 72, occupation: "driver" },
  ];
    const maximum = 8;
    

        function addLancer() {
            const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
            const name = randomFreelancer.name;
            const price = randomFreelancer.price;
            const occupation = randomFreelancer.occupation;
            freelancers.push({name, price, occupation});
        }
    

    function render() { 
        
        const freelance = document.querySelector("#freelancers"); 
        const freelanceElements = freelancers.map((freelancer) => { 
            
            const ListItem = document.createElement("li") 
            ListItem.classList.add(freelancer.price, freelancer.occupation) 
            ListItem.innerText = `${freelancer.name} - $${freelancer.price} - ${freelancer.occupation}`;
            return ListItem;
            
            
            
            
            
        
        }); 
        
        freelance.replaceChildren(...freelanceElements); 
        updateAveragePrice();
} 

function updateAveragePrice() {
    
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    
    const averagePrice = (totalPrice / freelancers.length).toFixed(2);
    
    
    const avgPriceElement = document.querySelector("#average-price");
    avgPriceElement.innerText = `Average Price: $${averagePrice}`;
  }
  
    
    
    const addLancerIntervalid = setInterval(() => {
        if(freelancers.length >=  maximum)clearInterval

        addLancer();

        render();

    }, 1000);
    
    
    
    render();