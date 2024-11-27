import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

export async function detectHands(imageElement: HTMLImageElement): Promise<boolean> {
  try {
    await tf.ready();
    const model = await handpose.load();
    const predictions = await model.estimateHands(imageElement);
    
    // 检测到两只手即可通过
    return predictions.length >= 2;
  } catch (error) {
    console.error('Hand detection failed:', error);
    return false;
  }
}