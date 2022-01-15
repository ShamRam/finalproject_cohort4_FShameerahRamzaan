#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split


# In[2]:


readData = pd.read_csv ('marks.csv')
readData


# In[3]:


readData.info()


# In[7]:


y = readData ['Marks']
x = readData ['Month']


# In[8]:


plt.scatter (x,y)
plt.xlabel('Month')
plt.ylabel('Marks')
plt.show()


# In[9]:


X = readData.iloc[:,0:1].values
y = readData.iloc[:,1].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


# In[10]:


X_train


# In[11]:


X_test


# In[12]:


y_train


# In[13]:


y_test


# In[14]:


print('X_train', X_train.shape)
print('X_test', X_test.shape)
print('y_train', y_train.shape)
print('y_test', y_test.shape)


# In[15]:


import statsmodels.api as sm
x1 = sm.add_constant(X_train)
model1 = sm.OLS(y_train, x1).fit()


# In[16]:


model1.summary()


# In[17]:


from sklearn.linear_model import LinearRegression
linearReg = LinearRegression()
linearReg.fit(X, y)


# In[18]:


linearReg.score(X_test, y_test) #check accuracy 


# In[19]:


def getLinearOutput():
    plt.scatter(X, y, color='Orange')
    plt.plot(X, linearReg.predict(X), color='Blue')
    plt.title('Linear Regression of Annual Temperature change')
    plt.xlabel('Year')
    plt.ylabel('Annual Temp')
    plt.show()
    return
getLinearOutput() 


# In[20]:


linearReg.predict([[5.5]])


# In[21]:


from sklearn.preprocessing import PolynomialFeatures
poly_reg = PolynomialFeatures(degree=4)
X_poly = poly_reg.fit_transform(X)
pol_reg = LinearRegression()
pol_reg.fit(X_poly, y)


# In[22]:


def getpolymonial():
    plt.scatter(X, y, color='Red')
    plt.plot(X, pol_reg.predict(poly_reg.fit_transform(X)), color='Blue')
    plt.title('Polynomial Regression of Annual Temperature change')
    plt.xlabel('Year')
    plt.ylabel('Annual Temp')
    plt.show()
    return

getpolymonial()


# In[23]:


pol_reg.predict(poly_reg.fit_transform([[5.5]]))


# In[34]:


predicted = {}
for i in range(1,10):
    yhat = 43.26 + 4.7652 * (6 + i)
    predicted[10 + i] = yhat


# In[35]:


predicted


# In[ ]:




