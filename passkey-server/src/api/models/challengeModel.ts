import {model, Schema} from 'mongoose';
import {Challenge} from '../../types/PasskeyTypes';

const challengeSchema = new Schema<Challenge>({
  // TODO: add challenge (String, required)
  challenge: {
    type: String,
    required: true,
  },
  // TODO: add email (String, required, unique)
  email: {
    type: String,
    required: true,
    unique: true
  }
});

export default model<Challenge>('Challenge', challengeSchema);
