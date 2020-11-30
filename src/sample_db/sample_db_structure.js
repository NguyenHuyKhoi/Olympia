/// this database is constructed base on response from APIs 
/// => name of fields of objects doesn't changed when integrating real APIs 
///Note : some fields is OPTIONAL , it can be not existed in API responses 
///     => Need check to display or not component which use fields
export const sample_db={
     users:[
          {
               id:'',//string
               username:'',//string
               avatar:'',//string - url 
               phonenumber:'',//string - 10-digits , number 0 firstly .
               created:'',//string - integer-type : is milliseconds from 01/01/1970 00:00:00  (UTC Time)
               description:'',//string 
               cover_image:'',//string 
               link:'',//string
               address:'',//string
               city:'',//string
               country:'',//string
               listing:'',//string - friend number 
               is_friend:'',//string - 0 or 1: user is friend of this user ?
               online:'',//string - 0 or 1 : this user is online ?
          }
     ],
     posts:[
          {
               id:'',//string 
               described:'',//string - text-type content of post 
               created:'',//string -  UTC time
               modified:'',//string - UTC time, latest modified time
               like:'',//string - integer-type : like number
               comment:'',//string -integer_type: comment number
               is_liked:'',//string - boolean-type : user liked this post?
               //optional 
               image:[
                    {
                         id:'',//string - index of image , in [0..3]
                         url:''//string
                    }
               ],
               //optional
               video:{
                    url:'',//string  - url of video
                    thumb:''//string - url of thumbnail 
               },
               author:{
                    id:'',//string 
                    name:'',//string
                    avatar:'',//string - url-type
                    online:'',//string - boolean-type
               },
               //optional
               state:'',//string - structure :  " Đang :emoji_name: cảm thấy/ăn/chúc mừng... b:hạnh phúc/sinh nhật/...:b "
               is_blocked:'',//string - boolean_type: user is blocked by owner of this post (hide post),
               can_edit:'',//string - boolean-type: user can edit this post ( is owner and post isn't banned)
               banned:'',//string - integer_type: 0: isn't banned ,1 : violate community standards, 2: is banned on this nation , 3 : all images/video is obscured 
               can_comment:'',//string - boolean-type, user can comment this post ?,
               
          }
     ],
     comments:[
          {
               id:'',//string
               comment:'',//string - content of comment
               created:'',//string - UTC Time
               poster:{
                    id:'',//string
                    name:'',//string
                    avatar:'',//string - url_type
               }
          }
     ],
     searches:[
          {
               id:'',//string, 
               keyword:'',//string - many search can have same keyword
               created:'',//string - UTC Time
          }
     ],
     requested_friends:[
          {
               id:'',//string,
               username:'',//string
               avatar:'',//string
               same_friends:'',//string - common friend number
               created:'',//string -UTC Time, what time is request sended latest?
          }
     ],
     friends:[
          {
               id:'',//string,
               username:'',//string
               avatar:'',//string
               same_friends:'',//string - common friend number
               created:'',//string -UTC Time, what time is request sended latest?
          }
     ],
     suggested_friends:[
          {
               user_id:'',//string,
               username:'',//string
               avatar:'',//string
               same_friends:'',//string - common friend number
          }
     ],
     blocked_users:[
          {
               id:'',//string,
               name:'',//string
               avatar:'',//string
          }
     ],
     push_settings:{
          like_comments:'',//string - 0 or 1
          from_friends:'',//string - 0 or 1
          request_friend:'',//string - 0 or 1
          suggest_friend:'',//string - 0 or 1
          birthday:'',//string - 0 or 1
          video:'',//string - 0 or 1
          report:'',//string - 0 or 1
          sound_on:'',//string - 0 or 1
          notification_on:'',//string - 0 or 1
          vibrant_on:'',//string - 0 or 1
          led_on:'',//string - 0 or 1
     },
     notificationS:[
          {
               type:'',//string - name of screen which is navigated when user press notification 
               object_id:'',//string - param for pass to navigated screen
               title:'',//string
               notification_id:'',//string
               created:'',//string - UTC Time
               avatar:'',//string - url , image of notification item : user profile , video/report icon
               group:'',//string - 0 : notification (user in app : not navigate , not in app : open app ),  1: action ( navigate other screen when press item)
               read:'',//string - 0 : not read ,1 :read

          }
     ],
     chat_list:[
          {
               id:'',//string 
               partner:{
                    id:'',//string ,
                    username:'',//string 
                    avatar:'',//string - url
               },
               lastmessage:{
                    message:'',//string ,
                    create:'',//string - UTC Time
                    unread:'',//string boolean type
               }
          }
     ],
     a_chat_messages:[
          {
               messsage_id:'',//string,
               message:'',//string
               unread:'',//string -- boolean type
               created:'',//string -- UTC Time
               sender:{
                    id:'',//string , is user_id of user of partner ( in sample DB 0 : partner ,1 : user )
                    username:'',//string 
                    avatar:'',//string
               }
          }
     ]
}
