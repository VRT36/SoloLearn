#include <iostream>
using namespace std;

int main() {
    int i,no;
    cout<<"Enter the no. to get it's table: ";
    cin>>no;
    cout<<"\nTable of "<<no<<" : ";
    for(i=1;i<=10;i++)
    {
       cout<<"\n"<<no*i;
    }
    return 0;
}
