import dust
import camera_dif
import post
import math

def main():
    global dust
    w1 = 0.9
    w2 = 0.1
    user_id = 1
    
    
    #dust = dust.dust()
    dust = math.pow(math.e, -0.1*dust.dust()) * 100
    messy = camera_dif.messy() * 10
    total_score = messy * w1 + math.pow(math.e,-0.1*dust) * 100 * w2

    
    #messy = camera_dif.messy() * 10
    #total_score = messy * w1 + dust * w2

    
    post.post_bord(messy, dust, total_score, user_id)
    print(dust)
    print(messy)
    print(total_score)

if __name__ == "__main__":
    main()
