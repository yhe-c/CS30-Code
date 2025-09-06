// Bouncing Balls
//Using arrays and object notation

simulation:
  count: 64       ## number of particles`
  maxVelocity: 3.  ## temperature
  dT: 0.001       ## time step - simulation speed
  
  ##minGridSize: 20.0
  ##maxForce: 100000.0
  ##threeDimensions: false
  ##passesPerFrame: 200
  
  size:
    width:  50
    height: 100
    ##depth:  100
    
 
    
    
particles:
  A:
    color: cccccc
    radius: 1
    distribution: 1




    
interactions:
  gravity:
    A: { force: 0.005 }
  morse:
    
    ## atom pair: {attraction, softness, equilibrium distance}
    A-A:          { De: 0.01,   a: 2,    re: 2.5 }
