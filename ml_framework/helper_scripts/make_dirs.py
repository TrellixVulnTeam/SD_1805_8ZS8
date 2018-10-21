import os

cwd = os.getcwd()

os.chdir('../images/labeled/')

for i in range(1,11):
    if not os.path.exists('train_%s' % i):
        os.mkdir("train_%s" % i)
    else:
        print('train_%s exists' % i)

    if not os.path.exists('test_%s' % i):
        os.mkdir("test_%s" % i)
    else:
        print('test_%s exists' % i)

