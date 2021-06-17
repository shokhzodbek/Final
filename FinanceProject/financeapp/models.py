from django.db import models


class Origin(models.Model):             # 1.Manbalar
    name = models.CharField(max_length=512, blank=False, null=False)


    def __str__(self):
        return self.name


class AccountNumber(models.Model):      # 2.Hisob raqam
    name = models.CharField(max_length=512,blank=False,null=False)
    class Meta:
        verbose_name_plural  =  "Hisob raqamlar"

    def __str__(self):
        return self.name



class Accruals(models.Model):           # 3.Hisob-kitoblar
    name = models.CharField(max_length=512,blank=False,null=False)


    def __str__(self):
        return self.name


class Months(models.Model):             # 4.Yil oylari
    name = models.CharField(max_length=255, blank=False, null=False)
    
    def __str__(self):
        return self.name


class Counterparty(models.Model):       # 5.Kontragent
    name = models.CharField(max_length=255, blank=False,null=False)
    
    def __str__(self):
        return self.name


class Employees(models.Model):           # 6.Hodimlar
    name = models.CharField(max_length=255,blank=False,null=False)
    
    def __str__(self):
        return self.name


class RawMaterial(models.Model):        # 7.Xom - ashyolar
    name = models.CharField(max_length=255,blank=False,null=False)
    
    def __str__(self):
        return self.name


class ProductName(models.Model):        # 8.Mahsulot nomi
    name = models.CharField(max_length=255,blank=False,null=False)
    

    def __str__(self):
        return self.name


class NameGoods(models.Model):          # 9.Tovarlar nomi
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class Chanells(models.Model):           # 10.Kanallar
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class Order(models.Model):              # 11.Zakaslar
    name = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.name


class Planning(models.Model):           # 12. Rejalashtirish
    name = models.CharField(max_length=255, null=False, blank=False)
    
    def __str__(self):
        return self.name


class Addresses(models.Model):          # 13. Manzillar
    name = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.name


class TheNext(models.Model):            # 14. Keyingi qadamlar
    name = models.CharField(max_length=255, null=False, blank=False)
    
    def __str__(self):
        return self.name


class Probability(models.Model):     # 15. Extimolligi
    name = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.name


class Price(models.Model):              # 16. Narx
    name = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.name


class Gender(models.Model):         # 17. Jinsi()
    name = models.CharField(max_length=255, null=False, blank=False)
    

    def __str__(self):
        return self.name


class Position(models.Model):       # 18. Lavozimi
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class Referrance(models.Model):     # 19. Ma'lumot
    name = models.CharField(max_length=255,null=False,blank=False)
    
    def __str__(self):
        return self.name


class Sections(models.Model):       # 20. Bo'limlar
    name = models.CharField(max_length=255,null=False,blank=False)
    
    def __str__(self):
        return self.name


class Birdhouse(models.Model):       # 21. Qushxona
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class PaymentType(models.Model):       # 22. To'lov turi
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class Branches(models.Model):       # 23. Filiallar
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


class Construction(models.Model):    # 24. Qurilish
    name = models.CharField(max_length=255,null=False,blank=False)
    

    def __str__(self):
        return self.name


#Jadval uchun 

class Table(models.Model):
    autodate = models.DateTimeField(auto_now_add=True)              # autovaqt
    income = models.IntegerField(blank=True,null=True)              # kirim
    expense = models.IntegerField(blank=True,null=True)             #chiqim
    accountnumber = models.ForeignKey(AccountNumber,on_delete=models.SET_NULL,blank=True,null=True)  # xisob raqam
    counterparty = models.ForeignKey(Counterparty,on_delete=models.SET_NULL,blank=True,null=True) # Kontragent
    origin = models.ForeignKey(Origin,on_delete=models.SET_NULL,blank=True,null=True)   # manba
    comment = models.TextField()    #commet
    employes = models.ForeignKey(Employees,on_delete=models.SET_NULL,null=True,blank=True) #Hodimlar
    monthone = models.ForeignKey(Months,on_delete=models.SET_NULL,null=True,blank=True) # oyni tanlaydi
    # monthtwo = models.IntegerField(null=True,blank=True)
    cashmoney = models.IntegerField(null=True,blank=True,default=0) # naqd pul kassasi
    plasticmoney = models.IntegerField(null=True,blank=True,default=0) # plastik pul kassasi
    accountnumbermoney = models.IntegerField(null=True,blank=True,default=0) # xisob raqam pul kassasi
    dollar = models.IntegerField(null=True,blank=True,default=0) # dollar kassasi
    def __str__(self):
        return f"{self.id} - {self.accountnumber}"


class Endvalue(models.Model):
    autodate = models.DateTimeField(auto_now_add=True)
    cashmoneys = models.IntegerField(null=True,blank=True,default=0) # naqd pul kassasi
    plasticmoneys = models.IntegerField(null=True,blank=True,default=0) # plastik pul kassasi
    accountnumbermoneys = models.IntegerField(null=True,blank=True,default=0) # xisob raqam pul kassasi
    dollars = models.IntegerField(null=True,blank=True,default=0) # dollar kassasi

    def __str__(self):
        return int(self.id)













