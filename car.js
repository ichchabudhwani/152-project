AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 10 },
    },
  
    
    update:function(){
        window.addEventListener("click", e => {
            this.data.clickCounter=this.data.clickCounter+1;
            if(this.data.clickCounter===1){
                const rotation={x:0,y:0,z:0};
                this.el.setAttribute("rotation",rotation);
    
            }else if (this.data.clickCounter===2){
                const rotation={ x:0,y:100,z:0}
                this.el.setAttribute("rotation",rotation);
            }
    
        }
        );
    
    }
  });
  AFRAME.registerComponent("fall-down", {
    schema: {
      clickCounter: { type: "number", default: 0 },
    },
    tick: function () {
  
      window.addEventListener("click", (e) => {   
        this.data.clickCounter=this.data.clickCounter+1;
        
  
      });
      var rotation={x:0,y:100,z:0};
      
      this.el.setAttribute("rotation",rotation);
      this.el.setAttribute("rotation", { x:rotation.x, y: rotation.y, z: rotation.z });
    }
  });
 
  




