import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/utils/backendless";

export async function POST(req:NextRequest) {
    try{
        const{email, name, subject, message} = await req.json();
        await Backendless.Data.of('Message').save({
            name,
            email,
            subject,
            message,
        });

          return NextResponse.json(
            {message: 'Message Submited!'},
            {status: 201},
  );
    } catch(error){
        return NextResponse.json(error);
    }
    

}