import styles from './Skeleton.module.css';

interface SkeletonProps {
  width: string;
  height: string;
  radius: string;
  className?: string;
}

const Skeleton = ({ width, height, radius, className }: SkeletonProps) => {
  const style = {
    width,
    height,
    borderRadius: radius
  };

  return (
    <div
      style={style}
      className={`${styles.skeleton} ${className ?? ''}`}
    ></div>
  );
};

export default Skeleton;
