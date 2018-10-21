# ml_framework
Machine Learning Framework for JPHacks Project

## Contents
 * [Requirements](#reqs)
 * [Classifying Messy or Clean Room from 1 to 10](#onetoten)

## Requirements
Current setup has no GPU. Installation of Keras and Tensorflow are here:

[Keras Installation](https://keras.io/#installation),

[Tensorflow Installation](https://www.tensorflow.org/install/)

Let me know if I missed any requirements. I'm using **Python 3.6.**

#### RASPBERRY PIでテンサーフローインストール方
tensorflow 1.70 以上と tensorflow-hubも必要だと思う

[ここで](https://www.tensorflow.org/install/source_rpi)raspberry Pi でtensorflowをインストール方
をかいてあるのに、[まずpipとかcondaでインストールして見てほしい](https://www.tensorflow.org/install/pip).

あと、python3.6も必要だ

## Classifying Messy/Clean Room
<a name="onetoten"> </a>
### Initial Goal (Pre Work)
Simple 10 class classification machine learning model attempt. The model is called: "Inception V3" and the paper
on that model can be found [here](https://arxiv.org/pdf/1512.00567.pdf). Image of the inception_v3 model
because it looks cool:

<img src="https://github.com/KatoLabo/ml_framework/blob/master/inceptionv3onc--oview.png" width="700">

Using a pre-written script from Tensorflow, you can retrain the data using a pre-trained data model (inception v3)
that was trained on the ImageNet database to your images. 
### Approach
The approach is based off of the [hackster.io article on how to classify a room messy or not.](https://www.hackster.io/matt-farley/use-artificial-intelligence-to-detect-messy-clean-rooms-f224a2).
The script provided by Tensorflow (retrain.py) uses a pre-trained model of "Inception V3" and retrains it.
To retrain the model:
```shell

python retrain.py \
  --image_dir /path/to/labeled/files \
  --output_graph=rooms.pb \
  --output_labels=rooms.txt \
  --tfhub_module https://tfhub.dev/google/imagenet/inception_v3/feature_vector/1

```

I ran this script using the Anaconda prompt (which has the environment I need, with all
  the packages installed and Python 3.6), and I used Windows style (full) paths such as:
```shell

C:\Users\h_hof\Documents\ml_framework\images\labeled

```

#### 予測スクリプト
このスクリプトを使うとき、_rooms.pb_ と _rooms.txt_　のファイルが必要だ

To test the trained model:

```shell

python label_image.py \
  --graph=rooms.pb \
  --labels=rooms.txt \
  --input_layer=Placeholder \
  --image=/path/to/new/image.jpg

```

### Labeling
NOTE: I did not upload the images to GitHub. Get them from my Ekimae folder. Too big to upload.
I hand labeled each image 1 through 10, with 1 being the cleanest room possible, and 10 the most messy.

Small timeline of how the data labeling has/is gone:

10/16/18: 397 labeled images, 550+ more images waiting to be labeled

10/18/19: 957 labeled images

Messy Room Value 1

<img src="https://github.com/KatoLabo/ml_framework/blob/master/dirty_1.jpeg" width="350"> <img src="https://github.com/KatoLabo/ml_framework/blob/master/messy1_predict.png" width="370">

Messy Room Value 5

<img src="https://github.com/KatoLabo/ml_framework/blob/master/dirty_5.jpeg" width="350"> <img src="https://github.com/KatoLabo/ml_framework/blob/master/messy5_predict.png" width="370">

Messy Room Value 10

<img src="https://github.com/KatoLabo/ml_framework/blob/master/dirty_10.jpeg" width="350"> <img src="https://github.com/KatoLabo/ml_framework/blob/master/messy10_predict.png" width="370">

## Keras-Model
<a name="naivemodel"> </a>
## Approach
Herein lies a non-written documentation to a non-completed part.

## Resources
 * [Detect Messy/Clean Room with AI](https://www.hackster.io/matt-farley/use-artificial-intelligence-to-detect-messy-clean-rooms-f224a2)
 * [List of Manual Image Annotation Tools](https://en.wikipedia.org/wiki/List_of_manual_image_annotation_tools)
 * [Image Classification with Keras and Deep Learning](https://www.pyimagesearch.com/2017/12/11/image-classification-with-keras-and-deep-learning/)
 * [Tensorflow Object Detection API](https://github.com/tensorflow/models/tree/master/research/object_detection)
 * [ImageAI Python Library](https://github.com/OlafenwaMoses/ImageAI)
 * [ImageNET Database](http://www.image-net.org/)
 * [Step by Step Tutorial Tensorflow Object Detection API Part 1](https://medium.com/@WuStangDan/step-by-step-tensorflow-object-detection-api-tutorial-part-1-selecting-a-model-a02b6aabe39e)
 * [Step by Step Tutorial Tensorflow Object Detection API Part 2](https://medium.com/@WuStangDan/step-by-step-tensorflow-object-detection-api-tutorial-part-2-converting-dataset-to-tfrecord-47f24be9248d)
 * [Step by Step Tutorial Tensorflow Object Detection API Part 3](https://medium.com/@WuStangDan/step-by-step-tensorflow-object-detection-api-tutorial-part-3-creating-your-own-dataset-6369a4d30dfd)
 * [ConvNets Blog Post](https://colah.github.io/posts/2014-07-Conv-Nets-Modular/)
