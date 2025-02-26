package AreaOfCircle;

import java.util.Scanner;

public class AreaOfCircle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        final Double R = input.nextDouble();
        final Double n = Math.PI;

        final Double A = n * Math.pow(R, 2);

        System.out.println("A="+A);
    }
}
