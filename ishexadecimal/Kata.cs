using System;
using System.Text;
using System.Text.RegularExpressions;

public static class Kata{

  private static string prefix = @"^0x";
  private static string matchString = @"([g-z])";

  public static bool HexNumber(this string s){
    Match prefixMatch = Regex.Match(s, prefix);
    if(prefixMatch.Success){
      s = s.Substring(2);
    }
    Console.WriteLine(s);
    Match match = Regex.Match(s, matchString, RegexOptions.IgnoreCase);
    if (match.Success){
      return false;
    }else if (s.Length == 0){
      return false;
    } else{
      return true;
    }
  }

  public static void Main(){
    Console.WriteLine(HexNumber("0xface"));
  }

}
