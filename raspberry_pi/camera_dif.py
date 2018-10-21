import cv2
import numpy as np
import time
import picamera
import label_image as ml

def frame_sub(img1, img2, th):
    diff = cv2.absdiff(img1, img2)
    
    diff[diff<th] = 0
    diff[diff>=th] = 255
    mask = cv2.medianBlur(diff, 3)
    
    return mask

"""def messy():
    min_dirt = 10000

    with picamera.PiCamera() as camera:
        camera.resolution = (3280, 2464)
        camera.start_preview()
        time.sleep(1)
        camera.capture('diff.jpg')
            
    imgA = cv2.imread("original.jpg")
    imgB = cv2.imread("diff.jpg")

    grayA = cv2.cvtColor(imgA, cv2.COLOR_BGR2GRAY)
    grayB = cv2.cvtColor(imgB, cv2.COLOR_BGR2GRAY)

    mask = frame_sub(grayA, grayB, 30)
    pic_white = cv2.countNonZero(mask)
    #print(pic_white)

    #if pic_white > min_dirt:
    #    print("部屋が汚れています")
    #cv2.imwrite("result.jpg", mask)

    return pic_white
"""
def messy():
    """
    """
    with picamera.PiCamera() as camera:
        camera.resolution = (3200, 2464)
        time.sleep(1)
        camera.capture("instant.jpg")
        print("I took a picture!")
    file_name = "instant.jpg"
    model_file = "rooms_82.pb"
    label_file = "rooms_82.txt"
    input_height = 299
    input_width = 299
    input_mean = 0
    input_std = 255
    input_layer="Placeholder"
    output_layer="final_result"

    graph = ml.load_graph(model_file)
    t = ml.read_tensor_from_image_file(
      file_name,
      input_height=input_height,
      input_width=input_width,
      input_mean=input_mean,
      input_std=input_std)

    input_name = "import/" + input_layer
    output_name = "import/" + output_layer
    input_operation = graph.get_operation_by_name(input_name)
    output_operation = graph.get_operation_by_name(output_name)

    with ml.tf.Session(graph=graph) as sess:
        results = sess.run(output_operation.outputs[0], {
            input_operation.outputs[0]: t
        })
    results = np.squeeze(results)

    top_k = results.argsort()[-5:][::-1]
    labels = ml.load_labels(label_file)

    messy_end_label = 0
    for i in top_k:
        print(labels[i], results[i])
        messy_end_label += float(labels[i])*float(results[i])

    return messy_end_label
    

if __name__ == "__main__":
    messy()
