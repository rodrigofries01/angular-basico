using System;
using System.Numerics;
using System.Reflection;

namespace Calculator
{
  class Program
  {
    static void Main(string[] args)
    {
      Soma();
      Subtracao();
      Multiplicacao();
      Divisao();
    }

    static void Soma()
    {
      Console.Clear();

      System.Console.WriteLine("SOMA!");
      System.Console.WriteLine("Primeiro Valor: ");
      float v1 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("Segundo Valor: ");
      float v2 = float.Parse(Console.ReadLine());

      float resultado = v1 + v2;

      System.Console.WriteLine("");

      System.Console.WriteLine($"O resultado da soma é {resultado}");
      //  ||
      // System.Console.WriteLine("O resultado da soma é " + resultado);
      //  ||
      // System.Console.WriteLine($"O resultado da soma é {v1 + v2}");
      //  ||
      // System.Console.WriteLine("O resultado da soma é " + (v1 + v2));

      Console.ReadKey();
    }

    static void Subtracao()
    {
      Console.Clear();
      System.Console.WriteLine("SUBTRAÇÃO!");

      System.Console.WriteLine("Primeiro Valor: ");
      float v1 = float.Parse(System.Console.ReadLine());

      System.Console.WriteLine("Segundo Valor: ");
      float v2 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("");

      float resultado = v1 - v2;
      System.Console.WriteLine($"O resultado da subtração é {resultado}");
      Console.ReadKey();
    }

    static void Multiplicacao()
    {
      System.Console.Clear();
      System.Console.WriteLine("MULTIPLICAÇÃO!");

      System.Console.WriteLine("Primeiro Valor: ");
      float v1 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("Segundo Valor: ");
      float v2 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("");

      float resultado = (v1 * v2);
      System.Console.WriteLine($"O resultado da Multiplicação é {resultado}");
      System.Console.ReadKey();
    }

    static void Divisao()
    {
      System.Console.Clear();
      System.Console.WriteLine("DIVISÃO!");
      System.Console.WriteLine("Primeiro Valor: ");
      float v1 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("Segundo Valor: ");
      float v2 = float.Parse(Console.ReadLine());

      System.Console.WriteLine("");

      float resultado = (v1 / v2);
      System.Console.WriteLine($"O resultado da Divisão é {resultado}");
      System.Console.ReadKey();
    }
  }


}