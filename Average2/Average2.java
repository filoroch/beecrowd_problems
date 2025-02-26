package Average2;

import java.util.Scanner;

public class Average2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        final Double v1 = input.nextDouble();
        final Double v2 = input.nextDouble();
        final Double v3 = input.nextDouble();

        final Double p1 = 2.0, p2 = 3.0, p3 = 5.0;

        System.out.println("MEDIA = " + MP(v1, p1, v2, p2, v3, p3));
    }
    public static Double MP (Double v1, Double p1, Double v2, Double p2, Double v3, Double p3){
        final Double pv1 = p1 * v1;
        final Double pv2 = p2 * v2;
        final Double pv3 = p3 * v3;

        final Double pn = p1 + p2 + p3;

        return  ((pv1 + pv2 + pv3) / pn);
    }
}
