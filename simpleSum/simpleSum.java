package simpleSum;

import java.util.Scanner;

public class simpleSum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        final int A = input.nextInt();
        final int B = input.nextInt();

        final int X = A + B;

        System.out.println("SOMA = " + X);
    }
}
