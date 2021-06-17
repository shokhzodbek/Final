from rest_framework import serializers
from .models import (Months, Origin,
                    AccountNumber,Counterparty,
                    RawMaterial,Employees,ProductName,Table,Endvalue)


class ProductNameSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductName
        fields = '__all__'

class OriginSerializers(serializers.ModelSerializer):
    class Meta:
       model = Origin
       fields = '__all__'
       


class AccountnumberSerializers(serializers.ModelSerializer):
    class Meta:
        model = AccountNumber
        fields = '__all__'



class MonthSerializers(serializers.ModelSerializer):
    class Meta:
        model = Months
        fields = '__all__'



class CounterpartySerializers(serializers.ModelSerializer):
    class Meta:
        model = Counterparty
        fields = '__all__'



class EmployesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'
    


class RawMaterialSerializers(serializers.ModelSerializer):
    class Meta:
        model = RawMaterial
        fields = '__all__'


class TableSerializers(serializers.Serializer):
    id  = serializers.IntegerField(read_only=True)
    income = serializers.IntegerField()      # kirim
    expense = serializers.IntegerField()     #chiqim
    accountnumber = AccountnumberSerializers()  # xisob raqam
    counterparty = CounterpartySerializers() # Kontragent
    origin = OriginSerializers()   # manba
    comment = serializers.CharField(required = True)    #commet
    employes = EmployesSerializers() #Hodimlar
    monthone = MonthSerializers() # oyni tanlaydi
    # monthtwo = MonthSerializers()
    cashmoney = serializers.IntegerField() # naqd pul kassasi
    plasticmoney = serializers.IntegerField() # plastik pul kassasi
    accountnumbermoney = serializers.IntegerField() # xisob raqam pul kassasi
    dollar = serializers.IntegerField() # dollar pul kassasi JSON 
    def create(self,validated_data):
        a = Table.objects.all().order_by('-autodate')[:1]
        if validated_data['income']:
            if validated_data['accountnumber'] == 1:
                if validated_data['expense'] == 0:
                    if not a:
                        income = validated_data['income']
                        model = Table(
                        income = validated_data['income'],
                        expense = 0,
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes = validated_data['employes'],
                        monthone = validated_data['monthone'],
                        cashmoney = income,
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int(validated_data['income'])+int(i.cashmoney)
                            plastic = i.plasticmoney
                            accounnumberm = i.accountnumbermoney
                            dollar1 = i.dollar
                            model = Table(
                            income = validated_data['income'],
                            expense = 0,
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cash,
                            plasticmoney = plastic,
                            accountnumbermoney = accounnumberm,
                            dollar = dollar1
                            )
                        model.save()
            elif validated_data['accountnumber'] == 2:
                if validated_data['expense'] == 0:
                    if not a:
                        income = validated_data['income']
                        model = Table(
                        income = validated_data['income'],
                        expense = 0,
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        plasticmoney = income
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int(validated_data['income'])+int(i.plasticmoney)
                            cashmoney = i.cashmoney
                            accounnumberm = i.accountnumbermoney
                            dollar2 = i.dollar 
                            model = Table(
                            income = validated_data['income'],
                            expense = 0,
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmoney,
                            plasticmoney = cash,
                            accountnumbermoney = accounnumberm,
                            dollar = dollar2
                            )
                            model.save()
            elif validated_data['accountnumber'] == 3:
                if validated_data['expense'] == 0:
                    if not a:
                        income = validated_data['income']
                        model = Table(
                        income = validated_data['income'],
                        expense = 0,
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        accountnumbermoney = income
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int(validated_data['income'])+int(i.accountnumbermoney)
                            plastic = i.plasticmoney
                            cashmon = i.cashmoney
                            dollar3 = i.dollar
                            model = Table(
                            income = validated_data['income'],
                            expense = 0,
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmon,
                            plasticmoney = plastic,
                            accountnumbermoney = cash,
                            dollar = dollar3
                            )
                            model.save()
            elif validated_data['accountnumber'] == 4:
                if validated_data['expense'] == 0:
                    if not a:
                        income = validated_data['income']
                        model = Table(
                        income = validated_data['income'],
                        expense = 0,
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        dollar = income
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int(validated_data['income'])+int((i.dollar))
                            plastic = i.plasticmoney
                            cashmon = i.cashmoney
                            accountnumber = i.accountnumbermoney
                            model = Table(
                            income = validated_data['income'],
                            expense = 0,
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmon,
                            plasticmoney = plastic,
                            accountnumbermoney = accountnumber,
                            dollar = cash
                            )
                            model.save()

        elif validated_data['expense']:
            if validated_data['accountnumber'] == 1:
                if validated_data['income'] == 0:
                    if not a:
                        income = -(validated_data['expense'])
                        model = Table(
                        income = 0,
                        expense = validated_data['expense'],
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        cashmoney = income,
                        )
                        model.save()
                    elif a:
                        for i in a:
                            income = int(i.cashmoney) - int(validated_data['expense'])
                            plastic = i.plasticmoney
                            accountmoney = i.accountnumbermoney 
                            model = Table(
                            income = 0,
                            expense = validated_data['expense'],
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = income,
                            plasticmoney = plastic,
                            accountnumbermoney = accountmoney
                            )
                            model.save()
            elif validated_data['accountnumber'] == 2:
                if validated_data['income'] == 0:
                    if not a:
                        income = -(validated_data['expense'])
                        model = Table(
                        income = 0,
                        expense = validated_data['expense'],
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        plasticmoney = income
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int((i.plasticmoney)) - int(validated_data['expense'])
                            cashmoney = i.cashmoney
                            accounnumberm = i.accountnumbermoney
                            model = Table(
                            income = 0,
                            expense = validated_data['expense'],
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmoney,
                            plasticmoney = cash,
                            accountnumbermoney = accounnumberm
                            )
                            model.save()
            elif validated_data['accountnumber'] == 3:
                if validated_data['income'] == 0:
                    if not a:
                        income = -(validated_data['expense'])
                        model = Table(
                        income = 0,
                        expense = validated_data['expense'],
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        accountnumbermoney = income
                        )
                        model.save()
                    elif a:
                        for i in a:
                            cash = int(i.accountnumbermoney) - int(validated_data['expense'])
                            plastic = i.plasticmoney
                            cashmon = i.cashmoney
                            model = Table(
                            income = 0,
                            expense = validated_data['expense'],
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmon,
                            plasticmoney = plastic,
                            accountnumbermoney = cash
                            )
                            model.save()
            elif validated_data['accountnumber'] == 4:
                if validated_data['income'] == 0:
                    if not a:
                        income = -(validated_data['expense'])
                        model = Table(
                        income = 0,
                        expense = validated_data['expense'],
                        accountnumber_id = validated_data['accountnumber'],
                        counterparty_id = validated_data['counterparty'],
                        origin_id = validated_data['origin'],
                        comment = validated_data['comment'],
                        employes_id = validated_data['employes'],
                        monthone_id = validated_data['monthone'],
                        dollar = income,
                        )
                        model.save()
                    elif a:
                        for i in a:
                            income = int(i.dollar) - int(validated_data['expense'])
                            cashmon = i.cashmoney
                            plastic = i.plasticmoney
                            accountmoney = i.accountnumbermoney
                            model = Table(
                            income = 0,
                            expense = validated_data['expense'],
                            accountnumber_id = validated_data['accountnumber'],
                            counterparty_id = validated_data['counterparty'],
                            origin_id = validated_data['origin'],
                            comment = validated_data['comment'],
                            employes_id = validated_data['employes'],
                            monthone_id = validated_data['monthone'],
                            cashmoney = cashmon,
                            plasticmoney = plastic,
                            accountnumbermoney = accountmoney,
                            dollar = income
                            )
                            model.save()

class EndValuesSerialziers(serializers.Serializer):
    cashmoneys = serializers.IntegerField(default = 0) 
    plasticmoneys = serializers.IntegerField(default =0) 
    accountnumbermoneys = serializers.IntegerField(default=0)
    dollars = serializers.IntegerField(default=0)

    def create(self,validate_data):
        a = Table.objects.all().order_by('-autodate')[:1]
        for i in a:
            cash = int(i.cashmoney)-int(validate_data['cashmoneys'])
            plastic = int(i.plasticmoney)-int(validate_data['plasticmoneys'])
            account = int(i.accountnumbermoney)-int(validate_data['accountnumbermoneys'])
            dollar = int(i.dollar)-int(validate_data['dollars'])
            model = Endvalue(
                cashmoneys = cash,
                plasticmoneys = plastic,
                accountnumbermoneys = account,
                dollars = dollar
            )
            model.save()
