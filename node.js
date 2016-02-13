function CalculadoraFrete(origem,destino,peso){
 var _distancia = googleMaps.getDistance(origem,destino);
 var _valorFrete=[];
 var _repositorio = new RepositorioTaxasFrete();
 function buscaMenorFrete(){
  if(peso <= 30){
   if(_distancia < 50){
    _valorFrete.push(_repositorio.taxaMotoFreteMunicipal());
   }else{
    _valorFrete.push(_repositorio.taxaCorreios());
   }
  }
  else if(peso>30 && peso<800){  
   if(_distancia < 140){
    _valorFrete.push(_repositorio.taxaCarro());
   }else{
    _valorFrete.push(_repositorio.taxaCaminhao());
   }
  }
  else {
   if(_distancia < 300){
    _valorFrete.push(_repositorio.taxaCaminhao());
   }else{
    _valorFrete.push(_repositorio.taxaCarreta());
   }
  }
  _valorFrete.sort();
  return _valorFrete[0];
 }
}