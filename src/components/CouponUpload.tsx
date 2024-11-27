import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Heart, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import { detectHands } from '../utils/handDetection';
import { useSpring, animated } from 'react-spring';

interface CouponUploadProps {
  onSuccess: (coupon: { code: string; discount: number }) => void;
}

export const CouponUpload: React.FC<CouponUploadProps> = ({ onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      // 创建图片元素用于手势检测
      const img = new Image();
      const imageUrl = URL.createObjectURL(file);
      
      img.onload = async () => {
        try {
          const isValidPose = await detectHands(img);
          
          if (isValidPose) {
            const discount = Math.floor(Math.random() * 20) + 10;
            const code = 'LOVE' + Math.random().toString(36).substring(2, 8).toUpperCase();
            
            toast.success('检测到牵手照片！获得优惠券：' + discount + '元 💝');
            onSuccess({ code, discount });
          } else {
            toast.error('未检测到牵手姿势，请上传有效的牵手照片 💔');
          }
        } catch (error) {
          toast.error('图片处理失败，请重试');
        } finally {
          setIsProcessing(false);
          URL.revokeObjectURL(imageUrl);
        }
      };

      img.src = imageUrl;
    } catch (error) {
      toast.error('图片上传失败，请重试');
      setIsProcessing(false);
    }
  }, [onSuccess]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    disabled: isProcessing
  });

  return (
    <animated.div 
      style={animation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border border-pink-200 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-red-400" size={24} />
        <h3 className="text-xl font-bold text-gray-800">上传甜蜜牵手照</h3>
      </div>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragActive 
            ? 'border-red-400 bg-red-50' 
            : 'border-pink-300 hover:border-red-400 hover:bg-pink-50'
          }
          ${isProcessing ? 'opacity-50 cursor-wait' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {isProcessing ? (
          <div className="flex flex-col items-center gap-3">
            <Loader className="animate-spin text-red-400" size={32} />
            <p className="text-gray-600">正在检测牵手姿势...</p>
          </div>
        ) : acceptedFiles.length > 0 ? (
          <div className="text-gray-600">
            已选择: {acceptedFiles[0].name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                acceptedFiles.splice(0, acceptedFiles.length);
              }}
              className="ml-2 text-red-400 hover:text-red-500"
            >
              <X size={16} className="inline" />
            </button>
          </div>
        ) : (
          <div>
            <Upload 
              className={`mx-auto mb-4 ${isDragActive ? 'text-red-400' : 'text-pink-400'}`} 
              size={32} 
            />
            <div className="text-gray-600">
              <p className="font-medium">点击或拖拽上传照片</p>
              <p className="text-sm mt-1">支持 JPG, PNG 格式</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
        <Heart size={14} className="text-red-400" />
        <p>上传甜蜜牵手照，即可获得 10-30 元随机优惠券</p>
      </div>
    </animated.div>
  );
};