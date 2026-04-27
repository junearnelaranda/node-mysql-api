declare module 'mysql2/promise' {
  const mysql: {
    createConnection(config: {
      host: string;
      port: number;
      user: string;
      password: string;
    }): Promise<{
      query(sql: string): Promise<unknown>;
      end(): Promise<void>;
    }>;
  };

  export default mysql;
}
