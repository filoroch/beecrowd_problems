package simpleProduct;

import java.util.Scanner;

public class simpleProduct {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        final int A = input.nextInt();
        final int B = input.nextInt();

        final int PROD = A * B;

        System.out.println("PROD = " + PROD);
    }
}
