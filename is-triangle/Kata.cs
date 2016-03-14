public static class Kata{
  public static bool IsTriangle(int a, int b, int c){

    if ( a + b > c && b + c > a && a + c > b){
      return true;
    }else{
      return false;
    }
  }

  public static void Main(){
    Console.WriteLine(IsTriangle(5, 7, 10));
  }
}
