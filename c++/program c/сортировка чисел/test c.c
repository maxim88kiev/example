#include <stdio>

main() {
int dig[10]={5,3,2,4,6,7,11,17,0,13};
int i,j,N,mm,tmp;
N=10;
for(i=N-1;i>=1;i--)//����������
                {
                    mm=0;//������ �������� 0
                    //���� ������������ �������� � �������� ��� � mm
                    for(j=1;j<=i;j++)
                    if(dig[j] > dig[mm])
                    mm=j;// ��� ������������ ��������

                    tmp=dig[i];//��������� �����
                    dig[i]=dig[mm];//�������� � �����
                    dig[mm]=tmp;//����� �� ����� max
                }
for(i=0;i<N;i++)//������� � ����� ��������������� ������
printf("%d ", dig[i]);
printf("\n");


}
